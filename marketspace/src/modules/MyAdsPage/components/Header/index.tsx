import { HStack, Text, Button as GluestackButton } from "@gluestack-ui/themed";
import { Plus } from "phosphor-react-native";

export const Header = () => {
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
        onPress={() => {}}
        bg="transparent"
      >
        <Plus size={28} weight="bold" />
      </GluestackButton>
    </HStack>
  );
};
