import { ContainerDefault } from "@components/ContainerDefault";
import { Box, Center, Text, useToast, VStack } from "@gluestack-ui/themed";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Filter } from "./components/Filter";
import { CardList } from "./components/CardList";
import { ModalFilters } from "./components/ModalFilters";
import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ProductsDTO } from "@dtos/ProductsDTO";
import { AppError } from "@utils/AppError";
import { useFocusEffect } from "@react-navigation/native";
import { ToastMessage } from "@components/ToastMessage";
import { api } from "@services/api";
import { TYPE_PRODUCT_PAYMENT_METHOD } from "../AdPreviewPage/components/Footer";
import { Loading } from "@components/Loading";

export const HomePage = () => {
  const [isShowModalFilters, setIsShowModalFilters] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [products, setProducts] = useState<Array<ProductsDTO>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [isAcceptExchange, setIsAcceptExchange] = useState<boolean>(false);
  const [paymentMethods, setPaymentMethods] = useState<any>([]);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsShowModalFilters(true);
  }, []);

  const handleApplyFilters = async () => {
    setIsShowModalFilters(false);

    try {
      let paymentMethodsQuery = "";

      paymentMethods.forEach(
        (item: "cartao" | "pix" | "boleto" | "deposito" | "dinheiro") => {
          paymentMethodsQuery =
            paymentMethodsQuery +
            `&payment_methods=${
              TYPE_PRODUCT_PAYMENT_METHOD[
                item as keyof typeof TYPE_PRODUCT_PAYMENT_METHOD
              ]
            }`;
        }
      );

      const productsData = await api.get(
        `/products/?is_new=${isNew}&accept_trade=${isAcceptExchange}${paymentMethodsQuery}${
          search.length > 0 && `&query=${search}`
        }`
      );

      setProducts(productsData.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível receber os produtos. Tente Novamente!";

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
    }
  };

  const handleResetFilters = () => {
    setIsNew(true);
    setIsAcceptExchange(false);
    setPaymentMethods([]);
    loadProducts();
  };

  const loadProducts = async () => {
    try {
      const productsData = await api.get(`/products`);

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

        <Banner />

        <Filter
          handlePresentModalPress={handlePresentModalPress}
          setSearch={setSearch}
          search={search}
        />

        {isLoading ? (
          <Center w={"$full"} h={"$full"}>
            <Loading />
          </Center>
        ) : (
          <CardList products={products} />
        )}

        {isShowModalFilters && (
          <ModalFilters
            bottomSheetModalRef={bottomSheetModalRef}
            isAcceptExchange={isAcceptExchange}
            setIsAcceptExchange={setIsAcceptExchange}
            paymentMethods={paymentMethods}
            setPaymentMethods={setPaymentMethods}
            isNew={isNew}
            setIsNew={setIsNew}
            handleApplyFilters={handleApplyFilters}
            handleResetFilters={handleResetFilters}
          />
        )}
      </Box>
    </ContainerDefault>
  );
};
