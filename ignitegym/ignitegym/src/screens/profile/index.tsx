import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, Text, VStack, useToast } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import { ToastMessage } from "@components/ToastMessage";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import defaulUserPhotoImg from "@assets/userPhotoDefault.png";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  oldPassword: string;
  newPassword: string;
  old_password: string;
  confirm_password: string;
};

const profileSchema: any = yup.object({
  // name: yup.string().required("Informe o nome"),
  // password: yup
  //   .string()
  //   .min(6, "A senha deve ter pelo menos 6 dígitos.")
  //   .nullable()
  //   .transform((value) => (!!value ? value : null)),
  // confirm_password: yup
  //   .string()
  //   .nullable()
  //   .when("password", {
  //     is: (Field: any) => Field,
  //     then: yup.string().required("Informe a confirmação da senha."),
  //     otherwise: yup
  //       .string()
  //       .nullable()
  //       .transform((value) => (!!value ? value : null)),
  //   }),
});

export function Profile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string>("");
  const toast = useToast();
  const { user, updateUserProfile } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(profileSchema),
  });

  console.log("errors", errors);

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);
      await api.put("/users", data);
      const userUpdated = user;
      userUpdated.name = data.name;

      await updateUserProfile(userUpdated);

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="success"
            id={id}
            title="Perfil atualizado com sucesso!"
            onClose={() => toast.close(id)}
          />
        ),
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível atualizar os dados. Tente novamente mais tarde.";

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
      setIsUpdating(false);
    }
  }

  async function handleUserPhotoSelect() {
    try {
      const photoSelected: any = await ImagePicker.launchImageLibraryAsync({
        // mediaTypes: ImagePicker.MediaTypeOptions.Images,
        mediaTypes: ["images"],
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected?.assets && photoSelected.assets[0]) {
        const photoUri = photoSelected.assets[0].uri;
        if (photoUri) {
          const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
            size: number;
          };

          if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
            return toast.show({
              placement: "top",
              render: ({ id }) => (
                <ToastMessage
                  action="error"
                  id={id}
                  title="Imagem muito grande"
                  description="Escolha uma imagem com no máximo 5MB"
                  onClose={() => toast.close(id)}
                />
              ),
            });
          }

          setUserPhoto(photoSelected.assets[0].uri);

          const fileExtension = photoSelected.uri.split(".").pop();
          const photoFile = {
            name: `${user.name}.${fileExtension}`.toLowerCase(),
            uri: photoSelected.uri,
            type: `${photoSelected.type}/${fileExtension}`,
          } as any;

          const userPhotoUploadForm = new FormData();
          userPhotoUploadForm.append("avatar", photoFile);
          const avatarUpdtedResponse = await api.patch(
            "/users/avatar",
            userPhotoUploadForm,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          const userUpdated = user;
          userUpdated.avatar = avatarUpdtedResponse.data.avatar;
          await updateUserProfile(userUpdated);

          console.log(photoFile);

          toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage
                action="success"
                id={id}
                title="Foto atualizada com sucesso."
                onClose={() => toast.close(id)}
              />
            ),
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={
              user.avatar
                ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
                : defaulUserPhotoImg
            }
            size="xl"
            alt="Imagem do usuário"
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4">
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  bg="$gray600"
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <Input
                  bg="$gray600"
                  placeholder="E-mail"
                  isDisabled
                  onChangeText={onChange}
                  value={value}
                  isReadOnly
                />
              )}
            />
          </Center>

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            Alterar senha
          </Heading>
          <Center w="$full" gap="$4">
            <Controller
              control={control}
              name="old_password"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha antiga"
                  bg="$gray600"
                  secureTextEntry
                  onChange={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Nova senha"
                  bg="$gray600"
                  secureTextEntry
                  onChange={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Confirme a nova senha"
                  bg="$gray600"
                  secureTextEntry
                  onChange={onChange}
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              title="Atualizar"
              onPress={handleSubmit(handleProfileUpdate)}
              isLoading={isUpdating}
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
