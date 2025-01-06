import { GestureHandlerRootView } from "react-native-gesture-handler";

import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import {
  HStack,
  Text,
  View,
  VStack,
  Button as GluestackButton,
  Switch,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  CheckboxGroup,
} from "@gluestack-ui/themed";
import { gluestackUIConfig } from "../../../../../config/gluestack-ui.config";
import { X } from "phosphor-react-native";
import { Button } from "@components/Button";

interface IProps {
  bottomSheetModalRef: any;
}
export const ModalFilters = ({ bottomSheetModalRef }: IProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [valuesCheckbox, setValuesCheckbox] = useState([]);
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const dimensions = useWindowDimensions();
  const { tokens } = gluestackUIConfig;
  const colors = tokens.colors;

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheetModal
      snapPoints={[snapPoints.min, snapPoints.max]}
      ref={bottomSheetModalRef}
      onChange={() => {}}
    >
      <BottomSheetView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <VStack w={"$full"} p={"$5"} alignItems="flex-start" gap={15}>
          <HStack
            w={"$full"}
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text color="$gray700" fontSize={"$xl"} fontFamily="$heading">
              Filtrar anúncios
            </Text>

            <GluestackButton bg="transparent" w={20} onPress={() => {}}>
              <X size={24} weight="thin" />
            </GluestackButton>
          </HStack>

          <VStack
            w={"$full"}
            gap={10}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Text color="$gray700" fontSize={"$md"} fontFamily="$body">
              Condição
            </Text>

            <HStack
              w={"$full"}
              gap={10}
              alignItems="center"
              justifyContent="flex-start"
            >
              <Button
                title="NOVO"
                // onPress={handleSubmit(handleSignIn)}
                onPress={() => {}}
                type="primary"
                w={"$24"}
                h={"$8"}
                borderRadius={"$2xl"}
              />
              <Button
                title="USADO"
                // onPress={handleSubmit(handleSignIn)}
                onPress={() => {}}
                type="secondary"
                w={"$24"}
                h={"$8"}
                borderRadius={"$2xl"}
              />
            </HStack>

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
                <Checkbox value="boleto" aria-label="Boleto" gap={10}>
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
                  <CheckboxLabel>Boleto</CheckboxLabel>
                </Checkbox>
                <Checkbox value="pix" aria-label="Pix" gap={10}>
                  <CheckboxIndicator
                    $checked-bg="$blue500"
                    $checked-borderColor="$blue500"
                  >
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Pix</CheckboxLabel>
                </Checkbox>
                <Checkbox value="dinheiro" aria-label="Dinheiro" gap={10}>
                  <CheckboxIndicator
                    $checked-bg="$blue500"
                    $checked-borderColor="$blue500"
                  >
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Dinheiro</CheckboxLabel>
                </Checkbox>
                <Checkbox
                  value="catao_credito"
                  aria-label="Cartão de Crédito"
                  gap={10}
                >
                  <CheckboxIndicator
                    $checked-bg="$blue500"
                    $checked-borderColor="$blue500"
                  >
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Cartão de Crédito</CheckboxLabel>
                </Checkbox>
                <Checkbox
                  value="deposito"
                  aria-label="Depósito Bancário"
                  gap={10}
                >
                  <CheckboxIndicator
                    $checked-bg="$blue500"
                    $checked-borderColor="$blue500"
                  >
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Depósito Bancário</CheckboxLabel>
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </VStack>

          <HStack
            mt={20}
            w={"$full"}
            gap={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              w={"$40"}
              title="Resetar filtros"
              onPress={() => {}}
              type="secondary"
            />
            <Button
              w={"$40"}
              title="Aplicar filtros"
              onPress={() => {}}
              type="black"
            />
          </HStack>
        </VStack>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
