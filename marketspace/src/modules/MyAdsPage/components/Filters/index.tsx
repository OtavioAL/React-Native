import {
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  HStack,
  Text,
  Select,
  SelectInput,
  SelectPortal,
  SelectContent,
  SelectDragIndicator,
  SelectBackdrop,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setFilter: Dispatch<SetStateAction<string>>;
  filter: string;
  numberAds: number;
}

export const Filters = ({ setFilter, filter, numberAds }: IProps) => {
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
        {numberAds ?? 0} anúncios
      </Text>

      <Select w={120} selectedValue={filter} onValueChange={setFilter}>
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
            <SelectItem label="Ativos" value="active" />
            <SelectItem label="Desativados" value="disabled" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </HStack>
  );
};
