import {
  Box,
  Center,
  Heading,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import LogoImg from "../../../assets/logo.png";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { HeaderPublicPage } from "@components/HeaderPublicPage";

export function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = () => {};

  const handleNewAccount = () => {
    navigation.navigate("signUp");
  };

  return (
    <SafeAreaView flex={1} pt={6}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
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

                <Controller
                  control={control}
                  name="email"
                  rules={{ required: "Informe o e-mail" }}
                  render={({ field: { onChange } }) => (
                    <Input
                      placeholder="E-mail"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={onChange}
                      // errorMessage={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  rules={{ required: "Informe a senha" }}
                  render={({ field: { onChange } }) => (
                    <Input
                      placeholder="Senha"
                      secureTextEntry
                      onChangeText={onChange}
                      // errorMessage={errors.password?.message}
                    />
                  )}
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
            <Center
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="$gray600"
                fontSize={"$md"}
                fontFamily="$body"
                mb={10}
              >
                Ainda não tem acesso?
              </Text>

              <Button
                title="Criar uma conta"
                onPress={handleNewAccount}
                isLoading={isLoading}
                type="secondary"
                w={"80%"}
              />
            </Center>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
