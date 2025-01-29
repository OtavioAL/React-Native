import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../theme";

type Props = PressableProps & {
  text: string;
  selected: boolean;
  error: boolean;
};

export function Select({ text, selected, error, ...rest }: Props) {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? THEME.COLORS.BASE.GRAY_900
            : THEME.COLORS.BASE.GRAY_700,
          borderColor: error
            ? THEME.COLORS.FEEDBACKS.RED
            : selected
            ? THEME.COLORS.PRODUCT.PURPLE
            : THEME.COLORS.BASE.GRAY_700,
          borderWidth: 2,
        },
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: selected
              ? THEME.COLORS.PRODUCT.PURPLE
              : THEME.COLORS.BASE.GRAY_300,
            fontWeight: selected ? "700" : "400",
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
