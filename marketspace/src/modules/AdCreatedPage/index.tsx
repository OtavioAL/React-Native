import { AdvertisementForm } from "@components/AdvertisementForm";
import { Button } from "@components/Button";
import { ContainerDefault } from "@components/ContainerDefault";
import { HeaderPages } from "@components/HeaderPages";
import { IPropsImage } from "@components/interfaces";
import { ToastMessage } from "@components/ToastMessage";
import { HStack, useToast } from "@gluestack-ui/themed";
import { Box, Button as GluestackButton } from "@gluestack-ui/themed";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

type FormDataProps = {
  title: string;
  description: string;
  value: string;
};

export const AdCreatedPage = () => {
  const { control, formState, handleSubmit, ...methods }: UseFormReturn<any> =
    useForm();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [listImages, setListImages] = useState<Array<IPropsImage>>([]);
  const [isAcceptExchange, setIsAcceptExchange] = useState<boolean>(false);
  const [paymentMethods, setPaymentMethods] = useState<any>([]);
  const [isNew, setIsNew] = useState<boolean>(false);
  const toast = useToast();
  const { user } = useAuth();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToPreview = ({ title, description, value }: FormDataProps) => {
    if (!listImages.length)
      return toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="error"
            id={id}
            title="Imagem do anuncio"
            description="Selecione ao menos uma imagem!"
            onClose={() => toast.close(id)}
          />
        ),
      });

    if (!paymentMethods.length)
      return toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="error"
            id={id}
            title="Meio de pagamento"
            description="Selecione ao menos um meio de pagamento!"
            onClose={() => toast.close(id)}
          />
        ),
      });

    navigation.navigate("adPreview", {
      title,
      description,
      value,
      listImages,
      paymentMethods,
      isNew,
      isAcceptExchange,
      nameUser: user?.name,
      imageUser: `${api.defaults.baseURL}/images/${user.avatar}`,
    });
  };

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
              onPress={handleSubmit(handleGoToPreview)}
              type="black"
            />
          </HStack>
        </Box>
      </ContainerDefault>
    </>
  );
};
