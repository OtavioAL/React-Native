import { Center } from "@gluestack-ui/themed";
import { SafeAreaView, ScrollView, VStack } from "@gluestack-ui/themed";
import { Header } from "./components/Header";
import { UserPhoto } from "@components/UserPhoto";
import defaulUserPhotoImg from "../../../assets/imageUserDefault.png";
import { useState } from "react";
import {
  useForm,
  FormState,
  UseFormReturn,
  ControllerProps,
} from "react-hook-form";
import { Form } from "./components/Form";
import { Button } from "@components/Button";
import { Footer } from "./components/Footer";
import { ContainerDefault } from "@components/ContainerDefault";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, formState, handleSubmit, ...methods }: UseFormReturn<any> =
    useForm();

  const handleCreateAccount = () => {};

  const handleGpSignIn = () => {};

  return (
    <ContainerDefault>
      <VStack flex={1} bg="$gray200">
        <Center flex={1} bg="$gray200" p={40} gap={6}>
          <Header />

          <UserPhoto
            source={defaulUserPhotoImg}
            size="md"
            alt="Imagem do usuário"
            mt={15}
            mb={15}
            isEdit
          />

          <Form
            formMethods={{
              control,
              formState,
              handleSubmit,
              ...methods,
            }}
          />

          <Button
            title="Criar"
            onPress={handleSubmit(handleCreateAccount)}
            isLoading={isLoading}
            type="black"
            w="$full"
          />

          <Footer handleGpSignIn={handleGpSignIn} isLoading={isLoading} />
        </Center>
      </VStack>
    </ContainerDefault>
  );
};
