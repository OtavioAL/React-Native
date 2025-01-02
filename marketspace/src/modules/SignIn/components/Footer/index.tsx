import { Button } from "@components/Button";
import { Center, Text } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";

interface IPropsFooter {
  handleNewAccount: () => void;
  isLoading: boolean;
}

export const Footer = ({ handleNewAccount, isLoading }: IPropsFooter) => {
  return (
    <Center flex={1} display="flex" alignItems="center" justifyContent="center">
      <Text color="$gray600" fontSize={"$md"} fontFamily="$body" mb={10}>
        Ainda não tem acesso?
      </Text>

      <Button
        title="Criar uma conta"
        onPress={handleNewAccount}
        isLoading={isLoading}
        type="secondary"
        w={"80%"}
      />
    </Center>
  );
};
