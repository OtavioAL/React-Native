import { UserPhoto } from "@components/UserPhoto";
import { HStack, Text } from "@gluestack-ui/themed";
import defaulUserPhotoImg from "../../../../../assets/imageUserDefault.png";

export const AdvertiserUser = () => {
  return (
    <HStack w={"$full"} p={"$5"} gap={"$2"} alignItems="center">
      <UserPhoto
        width={30}
        height={30}
        source={defaulUserPhotoImg}
        size="md"
        alt="Imagem do usuário"
      />

      <Text fontFamily="$body" fontSize={"$md"}>
        Makenna Baptista
      </Text>
    </HStack>
  );
};
