import { Box, Button, HStack, Image, VStack } from "@gluestack-ui/themed";
import imageCoverCard from "../../assets/image-cover-card.png";
import { Text } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/UserPhoto";
import defaulUserPhotoImg from "../../../assets/imageUserDefault.png";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

interface IProps {
  isMyAd?: boolean;
}

export function AdCard({ isMyAd }: IProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoToAdDetails = () => {
    if (isMyAd) {
      navigation.navigate("detailsMyAd");
      return;
    }
    navigation.navigate("adDetails", {
      adId: "123",
    });
  };

  return (
    <>
      <Button onPress={handleGoToAdDetails} w={160} h={150} bg="transparent">
        <VStack w={155}>
          <Box w={"$full"} rounded="$lg" h={100} position="relative">
            <Image
              size="md"
              source={imageCoverCard}
              alt="Imagem de capa do anúncio"
              rounded="$lg"
              w={"$full"}
              h={100}
            />

            <HStack
              position="absolute"
              top={0}
              left={0}
              gap={5}
              justifyContent="space-between"
              w={"$full"}
            >
              <UserPhoto
                source={defaulUserPhotoImg}
                size="sm"
                alt="Imagem do anunciante"
                w={30}
                h={30}
                isEdit={false}
              />

              <Box
                bg="$blue500"
                borderRadius={"$xl"}
                p={5}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color="$gray100"
                  fontSize={"$sm"}
                  fontFamily="$heading"
                  textTransform="uppercase"
                >
                  novo
                </Text>
              </Box>
            </HStack>
          </Box>

          <Text color="$gray600" fontSize={"$md"} fontFamily="$body">
            Tênis vermelho
          </Text>

          <HStack>
            <Text color="$gray700" fontSize={"$sm"} fontFamily="$heading">
              R$
            </Text>
            <Text color="$gray700" fontSize={"$sm"} fontFamily="$heading">
              59,90
            </Text>
          </HStack>
        </VStack>
      </Button>
    </>
  );
}
