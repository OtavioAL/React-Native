import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import ShoppingCartSvg from "../../assets/icons/shopping-cart.svg";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";
import { useCart } from "../../context/CartContext";
import { THEME } from "../../theme";

type Props = TouchableOpacityProps;

export function CartProduct({ ...rest }: Props) {
  const { products } = useCart();
  const navigation = useNavigation<RouteParamsList>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("cart")} {...rest}>
      <ShoppingCartSvg
        width={24}
        height={24}
        fill={
          products?.length > 0
            ? THEME.COLORS.PRODUCT.PURPLE
            : THEME.COLORS.PRODUCT.YELLOW_DARK
        }
      />

      {products?.length > 0 && (
        <View style={styles.indicator}>
          <Text style={styles.indicatorText}>{products?.length ?? 0}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
