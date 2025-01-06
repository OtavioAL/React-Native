import { CheckboxIcon, CheckboxLabel, CheckIcon } from "@gluestack-ui/themed";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  Switch,
  Text,
} from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { useState } from "react";

export function ProductPaymentMethod() {
  const [valuesCheckbox, setValuesCheckbox] = useState<any>([]);

  const PAYMENT_METHODS_OPTIONS = [
    {
      value: "boleto",
      label: "Boleto",
    },
    {
      value: "pix",
      label: "Pix",
    },
    {
      value: "dinheiro",
      label: "Dinheiro",
    },
    {
      value: "cartao",
      label: "Cartão de Crédito",
    },
    {
      value: "deposito",
      label: "Depósito Bancário",
    },
  ];

  return (
    <VStack w={"$full"} gap={"$2"}>
      <VStack
        w={"$full"}
        alignItems="flex-start"
        justifyContent="flex-start"
        mt={10}
      >
        <Text color="$gray700" fontSize={"$md"} fontFamily="$body">
          Aceita troca?
        </Text>

        <Switch
          size="lg"
          // isDisabled={false}
          trackColor={{ false: "$gray300", true: "$blue500" }}
          thumbColor={"$gray100"}
          // activeThumbColor={"$gray100"}
          ios_backgroundColor={"$gray100"}
        />
      </VStack>

      <VStack
        w={"$full"}
        alignItems="flex-start"
        justifyContent="flex-start"
        // mt={10}
      >
        <Text color="$gray700" fontSize={"$md"} fontFamily="$body">
          Meios de pagamento aceitos
        </Text>

        <CheckboxGroup
          mt={20}
          value={valuesCheckbox}
          onChange={(keys) => {
            setValuesCheckbox(keys);
          }}
        >
          <VStack space="xl">
            {PAYMENT_METHODS_OPTIONS?.map((item) => (
              <Checkbox
                value={item?.value}
                aria-label={item?.label}
                gap={10}
                key={item?.value}
                isChecked={valuesCheckbox?.includes(item?.value)}
              >
                <CheckboxIndicator
                  $checked-bg="$blue500"
                  $checked-borderColor="$blue500"
                >
                  <CheckboxIcon
                    $checked-bg="$gray100"
                    $checked-color="$gray100"
                    as={CheckIcon}
                  />
                </CheckboxIndicator>
                <CheckboxLabel>{item?.label}</CheckboxLabel>
              </Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </VStack>
    </VStack>
  );
}
