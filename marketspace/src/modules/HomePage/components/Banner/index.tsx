import {
  ButtonSpinner,
  Button as GluestackButton,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { ArrowRight, Tag } from "phosphor-react-native";

export const Banner = () => {
  return (
    <VStack w={"$full"} p={"$5"}>
      <Text color="$gray600" fontSize={"$md"} fontFamily="$body" mb={10}>
        Seus produtos anunciados para venda
      </Text>

      <GluestackButton
        w="$full"
        height={80}
        bg="$violet200"
        rounded="$sm"
        $active-bg="$blue500"
        opacity={0.5}
        gap={10}
      >
        <HStack flex={1} gap={10} alignItems="center">
          <Tag color={"#364D9D"} size={32} weight="bold" />

          <VStack>
            <Text color="$gray700" fontSize={"$xl"} fontFamily="$heading">
              4
            </Text>
            <Text color="$gray700" fontSize={"$md"} fontFamily="$body">
              anúncios ativos
            </Text>
          </VStack>
        </HStack>
        <HStack flex={1} alignItems="center" justifyContent="flex-end" gap={5}>
          <Text color="$blue700" fontSize={"$md"} fontFamily="$heading">
            Meus anúncios
          </Text>

          <ArrowRight color={"#364D9D"} size={22} />
        </HStack>
      </GluestackButton>
    </VStack>
  );
};
