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
import { ProductPaymentMethod } from "@components/ProductPaymentMethod";

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
          </VStack>

          <ProductPaymentMethod />

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
