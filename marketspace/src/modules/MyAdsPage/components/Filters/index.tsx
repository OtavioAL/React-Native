import {
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectItem,
  SelectTrigger,
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectDragIndicator } from "@gluestack-ui/themed";
import { SelectContent } from "@gluestack-ui/themed";
import { SelectPortal } from "@gluestack-ui/themed";
import { SelectInput } from "@gluestack-ui/themed";
import { Select } from "@gluestack-ui/themed";
import { HStack, Text } from "@gluestack-ui/themed";

export const Filters = () => {
  return (
    <HStack
      w={"$full"}
      alignItems="center"
      justifyContent="space-between"
      padding={"$5"}
      // mt={10}
      // mb={10}
    >
      <Text color="$gray500" fontSize={"$md"} fontFamily="$body">
        9 anúncios
      </Text>

      <Select w={120}>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Todos" />
          <SelectIcon as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="Ativos" value="ux" />
            <SelectItem label="Desativados" value="web" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </HStack>
  );
};
