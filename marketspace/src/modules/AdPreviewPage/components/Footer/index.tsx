import { Button } from "@components/Button";
import { RouteParamsAdPreview } from "@components/interfaces";
import { ToastMessage } from "@components/ToastMessage";
import { HStack, Text, useToast } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useState } from "react";

export const TYPE_PRODUCT_PAYMENT_METHOD = {
  cartao: "card",
  pix: "pix",
  boleto: "boleto",
  deposito: "deposit",
  dinheiro: "cash",
};

export const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const route = useRoute();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const {
    title,
    description,
    value,
    listImages,
    paymentMethods,
    isNew,
    isAcceptExchange,
    imageUser,
    nameUser,
  } = route.params as RouteParamsAdPreview;

  const handlePublish = async () => {
    setIsLoading(true);
    try {
      const product = await api.post("/products", {
        name: title,
        description,
        price: parseInt(value.replace(/[^0-9]/g, "")),
        payment_methods: paymentMethods?.map(
          (method) =>
            TYPE_PRODUCT_PAYMENT_METHOD[
              method as keyof typeof TYPE_PRODUCT_PAYMENT_METHOD
            ]
        ),
        is_new: isNew,
        accept_trade: isAcceptExchange,
      });

      const imageData = new FormData();

      listImages.forEach((item) => {
        const imageFile = {
          ...item,
          name: title + "." + item.name,
        } as any;

        imageData.append("images", imageFile);
      });

      imageData.append("product_id", product.data.id);

      await api.post("/products/images", imageData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="success"
            id={id}
            title="Anuncio criado com sucesso!"
            onClose={() => toast.close(id)}
          />
        ),
      });

      navigation.navigate("adDetails", {
        adId: product.data.id,
      });
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

  const haneleGoToEdit = () => {
    navigation.navigate("adCreated");
  };

  return (
    <HStack
      w={"$full"}
      p={"$5"}
      gap={"$2"}
      alignItems="center"
      justifyContent="space-between"
      bg="$gray100"
    >
      <Button
        title="Voltar e editar"
        onPress={haneleGoToEdit}
        type="secondary"
        w={"$40"}
      />
      <Button
        title="Publicar"
        onPress={handlePublish}
        type="primary"
        w={"$40"}
        isLoading={isLoading}
      />
    </HStack>
  );
};
