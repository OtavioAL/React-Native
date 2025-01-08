import { ContainerDefault } from "@components/ContainerDefault";
import { Box, Center, useToast, VStack } from "@gluestack-ui/themed";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { CardList } from "../HomePage/components/CardList";
import { useCallback, useEffect, useState } from "react";
import { Loading } from "@components/Loading";
import { AppError } from "@utils/AppError";
import { ToastMessage } from "@components/ToastMessage";
import { api } from "@services/api";
import { useFocusEffect } from "@react-navigation/native";
import { ProductsDTO } from "@dtos/ProductsDTO";

export const MyAdsPage = () => {
  const [products, setProducts] = useState<Array<ProductsDTO>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<string>("Todos");
  const toast = useToast();

  const loadProducts = async () => {
    try {
      const productsData = await api.get(`/users/products`);

      setProducts(productsData.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível criar a conta. Tente novamente mais tarde.";
      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="error"
            id={id}
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, [])
  );

  useEffect(() => {
    const productFiltered =
      filter === "all"
        ? products
        : products.filter(
            (product: any) => product.is_active === (filter === "active")
          );

    setProducts(productFiltered);
  }, [filter]);

  return (
    <ContainerDefault>
      <Box
        flex={1}
        mt={30}
        // gap={"$10"}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Header />

        <Filters
          setFilter={setFilter}
          filter={filter}
          numberAds={products?.length}
        />

        {!isLoading ? (
          <CardList isMyAd products={products} />
        ) : (
          <Center w={"$full"} h={"$full"}>
            <Loading />
          </Center>
        )}
      </Box>
    </ContainerDefault>
  );
};
