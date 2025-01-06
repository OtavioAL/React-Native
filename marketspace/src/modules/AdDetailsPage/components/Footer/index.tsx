import { Button } from "@components/Button";
import { HStack, Text } from "@gluestack-ui/themed";

export const Footer = () => {
  return (
    <HStack
      w={"$full"}
      p={"$5"}
      gap={"$2"}
      alignItems="center"
      justifyContent="space-between"
      bg="$gray100"
    >
      <HStack gap={"$1.5"} alignItems="flex-end">
        <Text fontFamily="$heading" fontSize={"$sm"} color={"$blue500"}>
          R$
        </Text>

        <Text fontFamily="$heading" fontSize={"$xl"} color={"$blue500"}>
          120,00
        </Text>
      </HStack>

      <Button
        title="Entrar em contato"
        onPress={() => {}}
        type="primary"
        w={"$48"}
      />
    </HStack>
  );
};
