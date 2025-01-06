import { Button } from "@components/Button";
import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";

export const Description = () => {
  return (
    <VStack w={"$full"} p={"$5"} pt={"$1"} mb={"$2.5"} gap={"$3"}>
      <Box
        bg="$blue500"
        w={"$12"}
        h={"$5"}
        borderRadius={"$2xl"}
        alignItems="center"
        justifyContent="center"
        // mb={15}
      >
        <Text
          color={"$white"}
          fontFamily="$heading"
          fontSize={12}
          textAlign={"center"}
        >
          NOVO
        </Text>
      </Box>

      <HStack w={"$full"} alignItems="center" justifyContent="space-between">
        <Text
          fontFamily="$heading"
          fontSize={"$2xl"}
          color={"$gray700"}
          fontWeight={"$bold"}
        >
          Bicicleta
        </Text>

        <HStack gap={"$1.5"} alignItems="flex-end">
          <Text fontFamily="$heading" fontSize={"$sm"} color={"$blue500"}>
            R$
          </Text>

          <Text fontFamily="$heading" fontSize={"$xl"} color={"$blue500"}>
            120,00
          </Text>
        </HStack>
      </HStack>

      <Text fontFamily="$body" fontSize={"$md"} color="$gray500">
        Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae
        ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris
        mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
      </Text>
    </VStack>
  );
};
