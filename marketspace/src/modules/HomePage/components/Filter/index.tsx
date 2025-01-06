import {
  FormControl,
  HStack,
  Text,
  VStack,
  Input as GluestackInput,
  InputField,
  Button as GluestackButton,
} from "@gluestack-ui/themed";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";

interface IProps {
  handlePresentModalPress: () => void;
}

export const Filter = ({ handlePresentModalPress }: IProps) => {
  return (
    <VStack w={"$full"} p={"$5"}>
      <Text color="$gray600" fontSize={"$md"} fontFamily="$body" mb={10}>
        Compre produtos variados
      </Text>

      <HStack
        bg="$gray100"
        w="$full"
        h={50}
        rounded="$lg"
        alignItems="center"
        justifyContent="space-between"
        padding={2}
        gap={10}
      >
        <FormControl w="70%">
          <GluestackInput
            w="$full"
            h={50}
            borderWidth="$0"
            borderRadius="$xl"
            $focus={{}}
            $invalid={{}}
          >
            <InputField
              w="$full"
              placeholder="Buscar anúncio"
              bg="$gray100"
              color="$gray400"
              fontFamily="$body"
              placeholderTextColor="$gray400"
            />
          </GluestackInput>
        </FormControl>

        <HStack alignItems="center">
          <GluestackButton bg="transparent" w={30}>
            <MagnifyingGlass size={20} color={"#1A181B"} />
          </GluestackButton>

          <VStack p={1} bg="$gray200" h={30} />

          {/* <Divider orientation="vertical"  /> */}

          <GluestackButton
            bg="transparent"
            w={30}
            onPress={handlePresentModalPress}
          >
            <Sliders size={20} color={"#1A181B"} />
          </GluestackButton>
        </HStack>
      </HStack>
    </VStack>
  );
};
