import { Image, useToast, VStack } from "@gluestack-ui/themed";
import { PencilLine } from "phosphor-react-native";
import { ComponentProps, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ToastMessage } from "@components/ToastMessage";
import * as FileSystem from "expo-file-system";
import defaulUserPhotoImg from "../../../assets/imageUserDefault.png";

type Props = ComponentProps<typeof Image> & {
  isEdit?: boolean;
  onChange?: (data: any) => void;
  uriImage?: string;
};
export function UserPhoto({
  isEdit = false,
  source,
  onChange,
  uriImage,
  ...props
}: Props) {
  const toast = useToast();
  const [userPhoto, setUserPhoto] = useState<string>("");

  async function handleUserPhotoSelect() {
    try {
      const photoSelected: any = await ImagePicker.launchImageLibraryAsync({
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

          const fileExtension = photoSelected?.assets[0]?.uri
            ?.split(".")
            ?.pop();
          const photoFile = {
            name: `${fileExtension}`.toLowerCase(),
            uri: photoSelected?.assets[0]?.uri,
            type: `${photoSelected?.assets[0]?.type}/${fileExtension}`,
          } as any;

          const userPhotoUploadForm = new FormData();
          userPhotoUploadForm.append("avatar", photoFile);
          if (onChange) onChange(photoFile);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (uriImage) setUserPhoto(uriImage);
  }, [uriImage]);

  return (
    <TouchableOpacity
      style={{
        position: "relative",
      }}
      disabled={!isEdit}
      onPress={() => {
        if (isEdit) {
          handleUserPhotoSelect();
        }
      }}
    >
      <Image
        rounded="$full"
        borderWidth="$2"
        borderColor="$blue500"
        backgroundColor="$gray500"
        source={userPhoto ? { uri: userPhoto } : defaulUserPhotoImg}
        {...props}
      />

      {isEdit && (
        <VStack
          position="absolute"
          bottom={15}
          right={"-$2"}
          bg={"$blue500"}
          p={10}
          borderRadius={"$full"}
        >
          <PencilLine size={16} color="#fff" />
        </VStack>
      )}
    </TouchableOpacity>
  );
}
