import { Box, Button, HStack, Image, VStack } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/UserPhoto";
import defaulUserPhotoImg from "../../../assets/imageUserDefault.png";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";

interface IProps {
  isMyAd?: boolean;
  imageCoverCard: string;
  isNew: boolean;
  name: string;
  price: number;
  id: string;
}

export function AdCard({
  isMyAd,
  imageCoverCard,
  isNew,
  name,
  price,
  id,
}: IProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { user } = useAuth();

  const handleGoToAdDetails = () => {
    if (isMyAd) {
      navigation.navigate("detailsMyAd", {
        // title: name,
        // description: product?.description,
        // value: `${product?.price}`,
        // listImages: product?.product_images,
        // paymentMethods: product?.payment_methods?.map((method) => method?.key),
        // isNew,
        // isAcceptExchange: product?.accept_trade,
        id,
      });
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
              source={{
                uri: imageCoverCard,
              }}
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
                source={
                  isMyAd
                    ? { uri: `${api.defaults.baseURL}/images/${user.avatar}` }
                    : defaulUserPhotoImg
                }
                size="sm"
                alt="Imagem do anunciante"
                w={30}
                h={30}
                isEdit={false}
              />

              <Box
                bg={isNew ? "$blue500" : "$gray300"}
                borderRadius={"$xl"}
                p={5}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  color={isNew ? "$gray100" : "$gray700"}
                  fontSize={"$sm"}
                  fontFamily="$heading"
                  textTransform="uppercase"
                >
                  {isNew ? "NOVO" : "USADO"}
                </Text>
              </Box>
            </HStack>
          </Box>

          <Text color="$gray600" fontSize={"$md"} fontFamily="$body">
            {name}
          </Text>

          <HStack>
            <Text color="$gray700" fontSize={"$sm"} fontFamily="$heading">
              R$
            </Text>
            <Text color="$gray700" fontSize={"$sm"} fontFamily="$heading">
              {price}
            </Text>
          </HStack>
        </VStack>
      </Button>
    </>
  );
}
