import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";
import ShoppingCartSvg from "../../assets/icons/shopping-cart.svg";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { useCart } from "../../context/CartContext";
import { Button } from "../../components/Button";
import { SwipeableCoffeeCard } from "../../components/SwipeableCoffeeCard";
import { ArrowLeft } from "phosphor-react-native";
import { Header } from "./components/Header";

export function CartPage() {
  const { clearCart, products, total } = useCart();
  const navigation = useNavigation<RouteParamsList>();

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: THEME.COLORS.BASE.WHITE,
        }}
      >
        <View style={styles.container}>
          <Header />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: THEME.COLORS.BASE.GRAY_800,
            }}
          >
            {products?.length === 0 ? (
              <View
                style={{
                  flex: 1,
                  gap: 16,
                  alignItems: "center",
                  paddingVertical: 64,
                }}
              >
                <ShoppingCartSvg
                  width={24}
                  height={24}
                  fill={THEME.COLORS.BASE.GRAY_500}
                />

                <Text>Seu carrinho está vazio</Text>

                <View style={{ width: "100%", paddingHorizontal: 32 }}>
                  <Button
                    text="ver catálogo"
                    onPress={() => navigation.navigate("home")}
                  />
                </View>
              </View>
            ) : (
              products?.map((product) => {
                return product.items.map((item, index) => (
                  <SwipeableCoffeeCard
                    key={product.id + index}
                    product={{
                      id: product.id,
                      size: item.size,
                      amount: item.amount,
                    }}
                  />
                ));
              })
            )}
          </ScrollView>

          <View style={[styles.footer, styles.shadow]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: THEME.COLORS.BASE.GRAY_200,
                }}
              >
                Valor total
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: THEME.COLORS.BASE.GRAY_200,
                }}
              >
                R$ {total?.toFixed(2)}
              </Text>
            </View>

            <Button
              variant="secondary"
              text="Confirmar Pedido"
              onPress={() => {
                clearCart();
                navigation.navigate("success");
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
