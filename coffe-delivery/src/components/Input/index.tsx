import { TextInput, View } from "react-native";

import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";
import { styles } from "./styles";
import { THEME } from "../../theme";

export function Input() {
  return (
    <View style={styles.container}>
      <MagnifyingGlass
        width={20}
        height={20}
        fill={THEME?.COLORS?.BASE?.GRAY_400}
      />

      <TextInput
        style={{
          flex: 1,
          height: 42,
          borderRadius: 4,
        }}
        placeholder="Pesquisar..."
        placeholderTextColor={THEME.COLORS.BASE.GRAY_400}
      />
    </View>
  );
}
