import { HStack, Image, Text, VStack } from "@gluestack-ui/themed";

import iconeBoleto from "../../../../assets/icone-boleto.png";
import iconePix from "../../../../assets/icone-pix.png";
import iconeDinheiro from "../../../../assets/icone-dinehiro.png";
import iconecCartao from "../../../../assets/icone-cartao.png";
import iconeDeposito from "../../../../assets/icone-deposito.png";

export const OptionsAds = () => {
  return (
    <VStack w={"$full"} gap={"$2.5"} p={"$5"} pt={"$1"}>
      <HStack w={"$full"} gap={"$2"}>
        <Text
          fontFamily="$heading"
          fontSize={"$md"}
          color={"$gray700"}
          // fontWeight={"$bold"}
        >
          Aceita troca?
        </Text>

        <Text fontFamily="$body" fontSize={"$md"} color={"$gray700"}>
          Sim
        </Text>
      </HStack>

      <VStack
        w={"$full"}
        gap={"$2"}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Text fontFamily="$heading" fontSize={"$md"} color={"$gray700"}>
          Meios de pagamento:
        </Text>

        <HStack w={"$full"} gap={"$2"} alignItems="center">
          <Image
            w={20}
            h={20}
            source={iconeBoleto}
            alt="imagem tipo de pagamento"
          />

          <Text fontFamily="$body" fontSize={"$md"} color={"$gray700"}>
            Boleto
          </Text>
        </HStack>

        <HStack w={"$full"} gap={"$2"} alignItems="center">
          <Image
            w={20}
            h={20}
            source={iconePix}
            alt="imagem tipo de pagamento"
          />

          <Text fontFamily="$body" fontSize={"$md"} color={"$gray700"}>
            Pix
          </Text>
        </HStack>

        <HStack w={"$full"} gap={"$2"} alignItems="center">
          <Image
            w={20}
            h={20}
            source={iconeDinheiro}
            alt="imagem tipo de pagamento"
          />

          <Text fontFamily="$body" fontSize={"$md"} color={"$gray700"}>
            Dinheiro
          </Text>
        </HStack>

        <HStack w={"$full"} gap={"$2"} alignItems="center">
          <Image
            w={20}
            h={20}
            source={iconecCartao}
            alt="imagem tipo de pagamento"
          />

          <Text fontFamily="$body" fontSize={"$md"} color={"$gray700"}>
            Cartão de Crédito
          </Text>
        </HStack>

        <HStack w={"$full"} gap={"$2"} alignItems="center">
          <Image
            w={20}
            h={20}
            source={iconeDeposito}
            alt="imagem tipo de pagamento"
          />

          <Text fontFamily="$body" fontSize={"$md"} color={"$gray700"}>
            Depósito Bancário
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
