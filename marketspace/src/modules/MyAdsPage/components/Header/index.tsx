import { HStack, Text, Button as GluestackButton } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Plus } from "phosphor-react-native";

export const Header = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoToCreated = () => {
    navigation.navigate("adCreated");
  };
  return (
    <HStack
      w={"$full"}
      justifyContent="center"
      mb={20}
      alignItems="flex-end"
      gap={10}
      mt={20}
      px={"$5"}
      pt={5}
      position="relative"
    >
      <Text
        color="$gray600"
        fontSize={"$lg"}
        fontFamily="$heading"
        fontWeight={"$bold"}
      >
        Meus anúncios
      </Text>

      <GluestackButton
        position="absolute"
        right={0}
        top={0}
        onPress={handleGoToCreated}
        bg="transparent"
      >
        <Plus size={28} weight="bold" />
      </GluestackButton>
    </HStack>
  );
};
