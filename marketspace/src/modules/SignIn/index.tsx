import { ContainerDefault } from "@components/ContainerDefault";
import { Center, VStack } from "@gluestack-ui/themed";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { useForm, UseFormReturn } from "react-hook-form";
import { Form } from "./components/Form";
import { Text } from "@gluestack-ui/themed";
import { Button } from "@components/Button";
import { HeaderPublicPage } from "@components/HeaderPublicPage";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, formState, handleSubmit, ...methods }: UseFormReturn<any> =
    useForm();

  const handleSignIn = () => {};

  const handleNewAccount = () => {
    navigation.navigate("signUp");
  };

  return (
    <ContainerDefault>
      <VStack flex={1} bg="$gray100">
        <VStack
          flex={2}
          bg="$gray200"
          borderBottomLeftRadius={"$3xl"}
          borderBottomRightRadius={"$3xl"}
          p={6}
        >
          <Center
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <VStack
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={4}
              flex={1}
            >
              <HeaderPublicPage
                description="Seu espaço de compra e venda"
                heightLogo={80}
                title="marketspace"
                widthLogo={110}
              />
            </VStack>

            <VStack
              flex={1}
              gap={4}
              mt={4}
              w={"80%"}
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="$gray600"
                fontSize={"$md"}
                fontFamily="$body"
                mb={10}
              >
                Acesse sua conta
              </Text>

              <Form
                formMethods={{
                  control,
                  formState,
                  handleSubmit,
                  ...methods,
                }}
              />

              <Button
                title="Entrar"
                onPress={handleSubmit(handleSignIn)}
                isLoading={isLoading}
              />
            </VStack>
          </Center>
        </VStack>

        <VStack flex={1} bg="$gray100">
          <Footer handleNewAccount={handleNewAccount} isLoading={isLoading} />
        </VStack>
      </VStack>
    </ContainerDefault>
  );
};
