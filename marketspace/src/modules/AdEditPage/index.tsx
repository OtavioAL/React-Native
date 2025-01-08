import { AdvertisementForm } from "@components/AdvertisementForm";
import { Button } from "@components/Button";
import { ContainerDefault } from "@components/ContainerDefault";
import { HeaderPages } from "@components/HeaderPages";
import { IPropsImage } from "@components/interfaces";
import { ToastMessage } from "@components/ToastMessage";
import { ProductsDTO } from "@dtos/ProductsDTO";
import { HStack, useToast } from "@gluestack-ui/themed";
import { Box, Button as GluestackButton } from "@gluestack-ui/themed";
import { useAuth } from "@hooks/useAuth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { ArrowLeft } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { TYPE_PRODUCT_PAYMENT_METHOD } from "../AdPreviewPage/components/Footer";

export const TYPE_PRODUCT_PAYMENT_METHOD_INVERT = {
  card: "cartao",
  pix: "pix",
  boleto: "boleto",
  deposit: "deposito",
  cash: "dinheiro",
};

type FormDataProps = {
  title: string;
  description: string;
  value: string;
};

export const AdEditPage = () => {
  const {
    control,
    formState,
    handleSubmit,
    setValue,
    ...methods
  }: UseFormReturn<any> = useForm();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [listImages, setListImages] = useState<Array<IPropsImage>>([]);
  const [isAcceptExchange, setIsAcceptExchange] = useState<boolean>(false);
  const [paymentMethods, setPaymentMethods] = useState<any>([]);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductsDTO>();
  const toast = useToast();
  const route = useRoute();
  const { id } = route.params as any;
  const handleGoBack = () => {
    navigation.goBack();
  };

  const loadProducts = async (id: string) => {
    try {
      const productsData = await api.get(`/products/${id}`);

      setProduct(productsData.data);
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
    }
  };

  const handleEdit = async ({ title, description, value }: any) => {
    try {
      await api.put(`/products/${id}`, {
        name: title,
        description,
        price: parseInt(value.replace(/[^0-9]/g, "")),
        payment_methods: paymentMethods?.map(
          (method: any) =>
            TYPE_PRODUCT_PAYMENT_METHOD[
              method as keyof typeof TYPE_PRODUCT_PAYMENT_METHOD
            ]
        ),
        is_new: isNew,
        accept_trade: isAcceptExchange,
      });

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="success"
            id={id}
            title="Anuncio editado com sucesso!"
            onClose={() => toast.close(id)}
          />
        ),
      });

      navigation.navigate("adDetails", {
        adId: id,
      });
    } catch (error) {
      console.log("errorr", error);
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
    }
  };

  useEffect(() => {
    if (id) loadProducts(id);
  }, [id]);

  useEffect(() => {
    if (product) {
      setValue("title", product?.name);
      setValue("description", product?.description);
      setValue("value", `${product?.price}`);
      setListImages(product?.product_images);
      setIsAcceptExchange(product?.accept_trade);
      setPaymentMethods(
        product?.payment_methods?.map(
          (method) =>
            TYPE_PRODUCT_PAYMENT_METHOD_INVERT[
              method?.key as keyof typeof TYPE_PRODUCT_PAYMENT_METHOD_INVERT
            ]
        )
      );
      setIsNew(product?.is_new);
    }
  }, [product]);

  return (
    <>
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
            title="Criar anúncio"
            isButtonLeft
            IconButtonLeft={() => {
              return (
                <GluestackButton
                  position="absolute"
                  left={0}
                  top={15}
                  onPress={handleGoBack}
                  bg="transparent"
                >
                  <ArrowLeft size={28} weight="light" />
                </GluestackButton>
              );
            }}
          />

          <AdvertisementForm
            listImages={listImages}
            setListImages={setListImages}
            isAcceptExchange={isAcceptExchange}
            setIsAcceptExchange={setIsAcceptExchange}
            paymentMethods={paymentMethods}
            setPaymentMethods={setPaymentMethods}
            isNew={isNew}
            setIsNew={setIsNew}
            formMethods={{
              control,
              formState,
              handleSubmit,
              setValue,
              ...methods,
            }}
          />

          <HStack
            w={"$full"}
            gap={10}
            alignItems="center"
            justifyContent="space-between"
            p={"$5"}
          >
            <Button
              w={"$40"}
              title="Cancelar"
              onPress={handleGoBack}
              type="secondary"
            />
            <Button
              w={"$40"}
              title="Avançar"
              onPress={handleSubmit(handleEdit)}
              type="black"
            />
          </HStack>
        </Box>
      </ContainerDefault>
    </>
  );
};
