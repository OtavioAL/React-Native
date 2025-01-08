import { UserPhoto } from "@components/UserPhoto";
import { HStack, Text, VStack } from "@gluestack-ui/themed";
import defaulUserPhotoImg from "../../../../../assets/imageUserDefault.png";
import { useAuth } from "@hooks/useAuth";
import { Button } from "@components/Button";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { api } from "@services/api";

export const Header = () => {
  const { user } = useAuth();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoToCreateAd = () => {
    navigation.navigate("adCreated");
  };

  return (
    <HStack p={20} gap={15}>
      <HStack flex={1.5} gap={10}>
        <UserPhoto
          width={45}
          height={45}
          uriImage={`${api.defaults.baseURL}/images/${user.avatar}`}
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
        onPress={handleGoToCreateAd}
        isLoading={false}
        type="black"
        flex={1}
      />
    </HStack>
  );
};
