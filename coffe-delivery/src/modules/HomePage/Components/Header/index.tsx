import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { THEME } from "../../../../theme";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../../../routes";

export function Header() {
  const navigation = useNavigation<RouteParamsList>();

  const handleGoToCart = () => navigation.navigate("cart");

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <MapPin size={24} weight="fill" color={THEME.COLORS.PRODUCT.PURPLE} />
        <Text style={styles.city}>Barbacena - MG</Text>
      </View>

      <TouchableOpacity onPress={handleGoToCart}>
        <ShoppingCart
          size={24}
          weight="fill"
          color={THEME.COLORS.PRODUCT.YELLOW_DARK}
        />
      </TouchableOpacity>
    </View>
  );
}
