import { UserPhoto } from "@components/UserPhoto";
import { HStack, Text } from "@gluestack-ui/themed";
import defaulUserPhotoImg from "../../../../../assets/imageUserDefault.png";

interface IProps {
  name: string;
  image?: string;
}

export const AdvertiserUser = ({ name, image }: IProps) => {
  return (
    <HStack w={"$full"} p={"$5"} gap={"$2"} alignItems="center">
      <UserPhoto
        width={30}
        height={30}
        source={image ?? defaulUserPhotoImg}
        size="md"
        alt="Imagem do usuário"
      />

      <Text fontFamily="$body" fontSize={"$md"}>
        {name ?? ""}
      </Text>
    </HStack>
  );
};
