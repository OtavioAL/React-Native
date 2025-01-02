import { Button } from "@components/Button";
import { Text } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";

interface IPropsFooter {
  handleGpSignIn: () => void;
  isLoading: boolean;
}

export const Footer = ({ handleGpSignIn, isLoading }: IPropsFooter) => {
  return (
    <VStack
      w={"$full"}
      mt={25}
      mb={10}
      alignContent="center"
      justifyContent="center"
    >
      <Text
        color="$gray600"
        fontSize={"$md"}
        fontFamily="$body"
        mb={10}
        textAlign="center"
      >
        Já tem uma conta?
      </Text>

      <Button
        title="Ir para o login"
        onPress={handleGpSignIn}
        isLoading={isLoading}
        type="secondary"
        w={"$full"}
      />
    </VStack>
  );
};
