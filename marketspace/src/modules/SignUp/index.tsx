import { Center, useToast } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
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
import { ToastMessage } from "@components/ToastMessage";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, formState, handleSubmit, ...methods }: UseFormReturn<any> =
    useForm();
  const toast = useToast();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleSignUp = async ({ name, email, password, phone }: any) => {
    try {
      const { name } = methods.getValues();

      const photoFile = methods.getValues("avatar");

      const userImage = {
        ...photoFile,
        name: `${name}.${photoFile.name}`.toLowerCase(),
      };

      const userForm: any = new FormData();

      userForm.append("avatar", userImage);
      userForm.append("name", name.toLowerCase());
      userForm.append("email", email.toLowerCase());
      userForm.append("tel", phone);
      userForm.append("password", password);

      setIsLoading(true);

      await api.post("/users", userForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigation.navigate("signIn");

      // await singIn(email, password);
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

  const handleGpSignIn = () => {
    navigation.navigate("signIn");
  };

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
            onChange={(image) => methods.setValue("avatar", image)}
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
            onPress={handleSubmit(handleSignUp)}
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
