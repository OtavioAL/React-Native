import { Pressable, PressableProps } from "react-native";
import { useState } from "react";
import { THEME } from "../../theme";
import { Trash } from "phosphor-react-native";

type Props = PressableProps;

export function ButtonDelete({ ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        width: 37,
        height: 37,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: isPressed
          ? THEME.COLORS.BASE.GRAY_700
          : THEME.COLORS.BASE.GRAY_600,
        backgroundColor: isPressed
          ? THEME.COLORS.BASE.GRAY_700
          : THEME.COLORS.BASE.GRAY_600,
      }}
      {...rest}
    >
      <Trash
        size={20}
        weight="thin"
        color={
          isPressed
            ? THEME.COLORS.PRODUCT.PURPLE
            : THEME.COLORS.PRODUCT.PURPLE_DARK
        }
      />
    </Pressable>
  );
}
