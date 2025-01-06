import { Button } from "@components/Button";
import { VStack } from "@gluestack-ui/themed";

export const Footer = () => {
  return (
    <VStack
      w={"$full"}
      p={"$5"}
      gap={"$2"}
      alignItems="center"
      justifyContent="center"
      bg="$gray100"
    >
      <Button
        title="Desativar anúncior"
        onPress={() => {}}
        type="black"
        w={"$full"}
      />
      <Button
        title="Excluir anúncio"
        onPress={() => {}}
        type="secondary"
        w={"$full"}
      />
    </VStack>
  );
};
