import { ContainerDefault } from "@components/ContainerDefault";
import { Box, useToast } from "@gluestack-ui/themed";
import { Footer } from "./components/Footer";
import { HeaderPages } from "@components/HeaderPages";
import { Button as GluestackButton } from "@gluestack-ui/themed";
import { ArrowLeft, PencilLine } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ContentAd } from "@components/ContentAd";
import { useCallback, useEffect, useState } from "react";
import { ProductsDTO } from "@dtos/ProductsDTO";
import { ToastMessage } from "@components/ToastMessage";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";
import { Center } from "@gluestack-ui/themed";
import { Loading } from "@components/Loading";

export const DetailsMyAdPage = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [products, setProducts] = useState<ProductsDTO>();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const route = useRoute();
  const { id } = route.params as any;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToEditAd = () => {
    navigation.navigate("adEdit", {
      id,
    });
  };

  const loadProducts = async (id: string) => {
    setIsLoading(true);
    try {
      const productsData = await api.get(`/products/${id}`);

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

  useEffect(() => {
    if (id) loadProducts(id);
  }, [id]);

  return (
    <ContainerDefault>
      <Box
        flex={1}
        mt={30}
        // gap={"$10"}
        alignItems="flex-start"
        justifyContent="flex-start"
        backgroundColor="$gray200"
        w={"$full"}
        h={"$full"}
      >
        <HeaderPages
          isButtonLeft
          IconButtonLeft={() => {
            return (
              <GluestackButton
                position="absolute"
                left={0}
                top={5}
                onPress={handleGoBack}
                bg="transparent"
              >
                <ArrowLeft size={28} weight="light" />
              </GluestackButton>
            );
          }}
          IconButtonRight={() => {
            return (
              <GluestackButton
                position="absolute"
                right={0}
                top={5}
                onPress={handleGoToEditAd}
                bg="transparent"
              >
                <PencilLine size={28} weight="light" />
              </GluestackButton>
            );
          }}
          isButtonRight
        />

        {isLoading ? (
          <Center w={"$full"} h={"$full"}>
            <Loading />
          </Center>
        ) : (
          <ContentAd product={products} />
        )}

        <Footer id={id} product={products} setProduct={setProducts} />
      </Box>
    </ContainerDefault>
  );
};
