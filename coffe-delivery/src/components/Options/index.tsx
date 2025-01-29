import { Text, View } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface Props {
  title: string;
  variant?: "primary" | "secondary";
}

export function Options({ title, variant = "primary" }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            variant === "primary"
              ? THEME.COLORS.PRODUCT.PURPLE_LIGHT
              : THEME.COLORS.BASE.GRAY_200,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              variant === "primary"
                ? THEME.COLORS.PRODUCT.PURPLE_DARK
                : THEME.COLORS.BASE.GRAY_900,
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}
