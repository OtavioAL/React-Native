import { Pressable, PressableProps } from "react-native";
import { useState } from "react";
import { THEME } from "../../theme";
import { Minus, Plus } from "phosphor-react-native";

type Props = PressableProps & {
  type: "add" | "remove";
};

export function ButtonAddAndRemove({ type, ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        backgroundColor: isPressed ? THEME.COLORS.BASE.GRAY_700 : "transparent",
      }}
      {...rest}
    >
      {type === "remove" ? (
        <Minus
          size={20}
          weight="thin"
          color={
            isPressed
              ? THEME.COLORS.PRODUCT.PURPLE_DARK
              : THEME.COLORS.PRODUCT.PURPLE
          }
        />
      ) : null}

      {type === "add" ? (
        <Plus
          size={20}
          weight="thin"
          color={
            isPressed
              ? THEME.COLORS.PRODUCT.PURPLE_DARK
              : THEME.COLORS.PRODUCT.PURPLE
          }
        />
      ) : null}
    </Pressable>
  );
}
