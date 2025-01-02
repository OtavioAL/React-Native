import { Heading, Image, Text } from "@gluestack-ui/themed";
import { Center, SafeAreaView, VStack } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";

import defaulUserPhotoImg from "../../../assets/imageUserDefault.png";
import { HeaderPublicPage } from "@components/HeaderPublicPage";
import { UserPhoto } from "@components/UserPhoto";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";

export function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateAccount = () => {};

  const handleGpSignIn = () => {};

  return (
    <SafeAreaView flex={1} pt={6}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} bg="$gray200">
          <Center flex={1} bg="$gray200" p={40} gap={6}>
            <HeaderPublicPage
              description="Crie sua conta e use o espaço para comprar itens variados e vender seus produtos"
              heightLogo={50}
              title="Boas vindas!"
              widthLogo={70}
            />

            <UserPhoto
              source={defaulUserPhotoImg}
              size="md"
              alt="Imagem do usuário"
              mt={15}
              mb={15}
              isEdit
            />

            <VStack gap={10}>
              <Controller
                control={control}
                name="name"
                rules={{ required: "Informe o nome" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Nome"
                    autoCapitalize="words"
                    onChangeText={onChange}
                    // errorMessage={errors.email?.message}
                  />
                )}
              />
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
                name="phone"
                rules={{ required: "Informe o telefone" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Telefone"
                    keyboardType="phone-pad"
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

              <Controller
                control={control}
                name="passwordConfirm"
                rules={{ required: "Confirme a senha" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={onChange}
                    // errorMessage={errors.password?.message}
                  />
                )}
              />
            </VStack>
            <Button
              title="Criar"
              onPress={handleSubmit(handleCreateAccount)}
              isLoading={isLoading}
              type="black"
              w="$full"
            />

            <VStack
              w={"$full"}
              mt={25}
              mb={10}
              alignContent="center"
              justifyContent="center"
            >
              <Text
                color="$gray600"
                fontSize={"$md"}
                fontFamily="$body"
                mb={10}
                textAlign="center"
              >
                Já tem uma conta?
              </Text>

              <Button
                title="Ir para o login"
                onPress={handleGpSignIn}
                isLoading={isLoading}
                type="secondary"
                w={"$full"}
              />
            </VStack>
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
