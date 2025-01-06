import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ProductPaymentMethod } from "@components/ProductPaymentMethod";
import { Radio, RadioGroup } from "@gluestack-ui/themed";
import { RadioIcon } from "@gluestack-ui/themed";
import { RadioLabel } from "@gluestack-ui/themed";
import { CircleIcon } from "@gluestack-ui/themed";
import { RadioIndicator } from "@gluestack-ui/themed";
import {
  HStack,
  Text,
  VStack,
  Button as GluestackButton,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { Plus } from "phosphor-react-native";
import { Controller, useForm } from "react-hook-form";

export function AdvertisementForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    // resolver: yupResolver(profileSchema),
  });
  return (
    <VStack
      w={"$full"}
      bg={"$gray200"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      p={"$5"}
    >
      <VStack w={"$full"} gap={"$2"}>
        <Text fontFamily={"$heading"} fontSize={"$md"} color={"$gray700"}>
          Imagens
        </Text>

        <Text fontFamily={"$body"} fontSize={"$sm"} color={"$gray600"}>
          Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
        </Text>

        <HStack w={"$full"} gap={"$2"}>
          <GluestackButton
            w="$24"
            h="$24"
            bg="$gray300"
            rounded="$md"
            alignItems="center"
            justifyContent="center"
          >
            <Plus size={28} weight="bold" />
          </GluestackButton>
        </HStack>
      </VStack>

      <VStack w={"$full"} gap={"$2"} mt={"$5"}>
        <Text fontFamily={"$heading"} fontSize={"$md"} color={"$gray700"}>
          Sobre o produto
        </Text>

        <Controller
          control={control}
          name="title"
          rules={{ required: "Informe o titulo do anúncio" }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Título do anúncio"
              autoCapitalize="words"
              onChangeText={onChange}
              // errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="title"
          rules={{ required: "Informe uma descrção para o anúncio" }}
          render={({ field: { onChange } }) => (
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              bg="$gray100"
              borderWidth={"$0"}
              borderRadius={"$md"}
            >
              <TextareaInput placeholder="Descrição do produto" />
            </Textarea>
          )}
        />
      </VStack>

      <HStack w={"$full"} mt={"$5"} gap={"$2"}>
        <RadioGroup gap={"$4"} flexDirection="row">
          <Radio
            value="new"
            size="md"
            isInvalid={false}
            isDisabled={false}
            gap={"$2"}
          >
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Produto novo</RadioLabel>
          </Radio>
          <Radio
            value="used"
            size="md"
            isInvalid={false}
            isDisabled={false}
            gap={"$2"}
          >
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Produto usado</RadioLabel>
          </Radio>
        </RadioGroup>
      </HStack>

      <VStack w={"$full"} gap={"$2"} mt={"$5"}>
        <Text fontFamily={"$heading"} fontSize={"$md"} color={"$gray700"}>
          Venda
        </Text>

        <Controller
          control={control}
          name="value"
          rules={{ required: "Informe o valor" }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Valor do produto"
              autoCapitalize="words"
              onChangeText={onChange}
              // errorMessage={errors.name?.message}
            />
          )}
        />
      </VStack>

      <ProductPaymentMethod />
    </VStack>
  );
}
