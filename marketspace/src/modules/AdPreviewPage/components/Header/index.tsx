import { Text, VStack } from "@gluestack-ui/themed";

export const Header = () => {
  return (
    <VStack
      w={"$full"}
      p={"$5"}
      gap={"$2"}
      alignItems="center"
      justifyContent="space-between"
      bg="$blue500"
    >
      <Text color={"$gray100"} fontSize={"$xl"} fontFamily="$heading">
        Pré visualização do anúncio
      </Text>
      <Text color={"$gray100"} fontSize={"$md"}>
        É assim que seu produto vai aparecer!
      </Text>
    </VStack>
  );
};
