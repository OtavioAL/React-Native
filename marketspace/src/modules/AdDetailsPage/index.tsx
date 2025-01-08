import { ContainerDefault } from "@components/ContainerDefault";
import { Box, Center, useToast } from "@gluestack-ui/themed";
import { Footer } from "./components/Footer";
import { HeaderPages } from "@components/HeaderPages";
import { Button as GluestackButton } from "@gluestack-ui/themed";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ContentAd } from "@components/ContentAd";
import { useEffect, useState } from "react";
import { ProductsDTO } from "@dtos/ProductsDTO";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { ToastMessage } from "@components/ToastMessage";
import { Loading } from "@components/Loading";

export const AdDetailsPage = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [products, setProducts] = useState<ProductsDTO>();
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const { adId } = route.params as any;
  const toast = useToast();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const loadProducts = async (adId: string) => {
    setIsLoading(true);
    try {
      const productsData = await api.get(`/products/${adId}`);

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
    if (adId) loadProducts(adId);
  }, [adId]);

  return (
    <ContainerDefault>
      <Box
        flex={1}
        mt={30}
        // gap={"$10"}
        alignItems="flex-start"
        justifyContent="flex-start"
        backgroundColor="$gray200"
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
        />

        {isLoading ? (
          <Center w={"$full"} h={"$full"}>
            <Loading />
          </Center>
        ) : (
          <ContentAd product={products} />
        )}

        <Footer />
      </Box>
    </ContainerDefault>
  );
};
