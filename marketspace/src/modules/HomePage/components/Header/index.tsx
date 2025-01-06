import { UserPhoto } from "@components/UserPhoto";
import { HStack, Text, VStack } from "@gluestack-ui/themed";
import defaulUserPhotoImg from "../../../../../assets/imageUserDefault.png";
import { useAuth } from "@hooks/useAuth";
import { Button } from "@components/Button";

export const Header = () => {
  const { user } = useAuth();

  return (
    <HStack p={20} gap={15}>
      <HStack flex={1.5} gap={10}>
        <UserPhoto
          width={45}
          height={45}
          source={defaulUserPhotoImg}
          size="md"
          alt="Imagem do usuário"
        />

        <VStack>
          <Text fontFamily="$body" fontSize={"$md"}>
            Boas vindas,
          </Text>
          <Text fontSize={"$md"} fontFamily="$heading">
            {user?.name}
          </Text>
        </VStack>
      </HStack>
      <Button
        title="Criar anúncio"
        onPress={() => {}}
        isLoading={false}
        type="black"
        flex={1}
      />
    </HStack>
  );
};
