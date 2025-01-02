import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";
type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  type?: "primary" | "secondary" | "black";
  isLoading?: boolean;
};
export function Button({
  title,
  type = "primary",
  isLoading = false,
  ...props
}: Props) {
  return (
    <GluestackButton
      w="$full"
      // h="$14"
      bg={
        type === "primary"
          ? "$blue500"
          : type === "secondary"
          ? "$gray300"
          : "$gray700"
      }
      // borderWidth={type === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      // $active-bg={type === "outline" ? "$gray500" : "$green500"}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={
            type === "primary"
              ? "$gray100"
              : type === "secondary"
              ? "$gray700"
              : "$gray100"
          }
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
