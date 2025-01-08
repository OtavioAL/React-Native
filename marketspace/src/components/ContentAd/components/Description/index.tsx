import { Button } from "@components/Button";
import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";

interface IProps {
  title: string;
  description: string;
  value: string;
  isNew: boolean;
}

export const Description = ({ description, title, value, isNew }: IProps) => {
  return (
    <VStack w={"$full"} p={"$5"} pt={"$1"} mb={"$2.5"} gap={"$3"}>
      <Box
        bg={isNew ? "$blue500" : "$gray300"}
        w={"$12"}
        h={"$5"}
        borderRadius={"$2xl"}
        alignItems="center"
        justifyContent="center"
        // mb={15}
      >
        <Text
          color={isNew ? "$gray100" : "$gray700"}
          fontFamily="$heading"
          fontSize={12}
          textAlign={"center"}
        >
          {isNew ? "NOVO" : "USADO"}
        </Text>
      </Box>

      <HStack w={"$full"} alignItems="center" justifyContent="space-between">
        <Text
          fontFamily="$heading"
          fontSize={"$2xl"}
          color={"$gray700"}
          fontWeight={"$bold"}
        >
          {title ?? ""}
        </Text>

        <HStack gap={"$1.5"} alignItems="flex-end">
          <Text fontFamily="$heading" fontSize={"$sm"} color={"$blue500"}>
            R$
          </Text>

          <Text fontFamily="$heading" fontSize={"$xl"} color={"$blue500"}>
            {value ?? ""}
          </Text>
        </HStack>
      </HStack>

      <Text fontFamily="$body" fontSize={"$md"} color="$gray500">
        {description ?? ""}
      </Text>
    </VStack>
  );
};
