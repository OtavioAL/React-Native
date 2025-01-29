import { useState } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { THEME } from "../../../../theme";
import { styles } from "./styles";

type Props = PressableProps & {
  text: string;
  isSelected: boolean;
};

export function FiltersOptions({ text, isSelected, ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={[
          styles.container,
          {
            backgroundColor: isSelected
              ? THEME.COLORS.PRODUCT.PURPLE
              : isPressed
              ? THEME.COLORS.PRODUCT.PURPLE
              : THEME.COLORS.BASE.GRAY_900,
            borderColor: isSelected
              ? THEME.COLORS.PRODUCT.PURPLE
              : isPressed
              ? THEME.COLORS.PRODUCT.PURPLE
              : THEME.COLORS.PRODUCT.PURPLE,
            borderWidth: 1,
          },
        ]}
        {...rest}
      >
        <Text
          style={[
            styles.text,
            {
              color: isSelected
                ? THEME.COLORS.BASE.WHITE
                : isPressed
                ? THEME.COLORS.BASE.WHITE
                : THEME.COLORS.PRODUCT.PURPLE_DARK,
            },
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </>
  );
}
