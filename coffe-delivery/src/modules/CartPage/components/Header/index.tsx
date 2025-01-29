import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import { THEME } from "../../../../theme";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../../../routes";

export function Header() {
  const navigation = useNavigation<RouteParamsList>();

  const handleGoBack = () => navigation.goBack();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.return}>
          <ArrowLeft
            size={24}
            weight="thin"
            color={THEME.COLORS.BASE.GRAY_100}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Carrinho</Text>
      </View>
    </>
  );
}
