import { Pressable, PressableProps, Text } from "react-native";
import { useState } from "react";
import { THEME } from "../../theme";
import { styles } from "./styles";

type Props = PressableProps & {
  text: string;
  variant?: "primary" | "secondary";
};

export function Button({ text, variant = "primary", ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.container,
        {
          backgroundColor:
            variant === "primary"
              ? isPressed
                ? THEME.COLORS.PRODUCT.PURPLE
                : THEME.COLORS.PRODUCT.PURPLE_DARK
              : !isPressed
              ? THEME.COLORS.PRODUCT.YELLOW
              : THEME.COLORS.PRODUCT.YELLOW,
        },
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          {
            color: THEME.COLORS.BASE.WHITE,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
