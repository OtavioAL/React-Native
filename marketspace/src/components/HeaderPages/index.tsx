import { Text } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";

interface IProps {
  title?: string;
  isButtonRight?: boolean;
  IconButtonRight?: any;
  onPressButtonRight?: () => void;
  isButtonLeft?: boolean;
  IconButtonLeft?: any;
  onPressButtonLeft?: () => void;
}

export const HeaderPages = ({
  title,
  isButtonRight = false,
  IconButtonRight = null,
  onPressButtonRight,
  isButtonLeft = false,
  IconButtonLeft = null,
  onPressButtonLeft,
}: IProps) => {
  return (
    <HStack
      w={"$full"}
      p={"$5"}
      pt={"$6"}
      gap={"$2"}
      alignItems="center"
      justifyContent="center"
      position="relative"
      bg="$gray200"
    >
      {isButtonRight && (
        <IconButtonRight onPress={onPressButtonRight} size={28} weight="bold" />
      )}
      {!!title?.length && (
        <Text
          color="$gray600"
          fontSize={"$lg"}
          fontFamily="$heading"
          fontWeight={"$bold"}
        >
          {title}
        </Text>
      )}
      {isButtonLeft && (
        <IconButtonLeft onPress={onPressButtonLeft} size={28} weight="bold" />
      )}
    </HStack>
  );
};
