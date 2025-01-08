import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useWindowDimensions } from "react-native";
import {
  HStack,
  Text,
  VStack,
  Button as GluestackButton,
} from "@gluestack-ui/themed";
import { gluestackUIConfig } from "../../../../../config/gluestack-ui.config";
import { X } from "phosphor-react-native";
import { Button } from "@components/Button";
import { ProductPaymentMethod } from "@components/ProductPaymentMethod";

interface IProps {
  bottomSheetModalRef: any;
  isAcceptExchange: boolean;
  setIsAcceptExchange: React.Dispatch<React.SetStateAction<boolean>>;
  paymentMethods: string[];
  setPaymentMethods: React.Dispatch<React.SetStateAction<string[]>>;
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
  handleApplyFilters: () => void;
  handleResetFilters: () => void;
}
export const ModalFilters = ({
  bottomSheetModalRef,
  isAcceptExchange,
  isNew,
  paymentMethods,
  setIsAcceptExchange,
  setIsNew,
  setPaymentMethods,
  handleApplyFilters,
  handleResetFilters,
}: IProps) => {
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
                onPress={() => setIsNew(true)}
                type={isNew ? "primary" : "secondary"}
                w={"$24"}
                h={"$8"}
                borderRadius={"$2xl"}
              />
              <Button
                title="USADO"
                onPress={() => setIsNew(false)}
                type={isNew ? "secondary" : "primary"}
                w={"$24"}
                h={"$8"}
                borderRadius={"$2xl"}
              />
            </HStack>
          </VStack>

          <ProductPaymentMethod
            onChangeSwitch={() => setIsAcceptExchange((oldState) => !oldState)}
            valueSwitch={isAcceptExchange}
            setValuesCheckbox={setPaymentMethods}
            valuesCheckbox={paymentMethods}
          />

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
              onPress={handleResetFilters}
              type="secondary"
            />
            <Button
              w={"$40"}
              title="Aplicar filtros"
              onPress={handleApplyFilters}
              type="black"
            />
          </HStack>
        </VStack>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
