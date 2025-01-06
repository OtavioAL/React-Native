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
      <Button
        title="Voltar e editar"
        onPress={() => {}}
        type="secondary"
        w={"$40"}
      />
      <Button title="Publicar" onPress={() => {}} type="primary" w={"$40"} />
    </HStack>
  );
};
