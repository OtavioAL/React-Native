import { Image, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import TrashSvg from "../../assets/icons/trash.svg";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import Animated, {
  LightSpeedOutRight,
  SlideOutRight,
} from "react-native-reanimated";
import { size } from "@shopify/react-native-skia";
import { useCart } from "../../context/CartContext";
import { THEME } from "../../theme";
import { ButtonAddAndRemove } from "../ButtonAddAndRemove";
import { ButtonDelete } from "../ButtonDelete";
import { OUR_COFFEES } from "../../utils/coffes";

interface Props {
  product: {
    id: number;
    amount: number;
    size: string;
  };
}

export function SwipeableCoffeeCard({ product }: Props) {
  const { deleteProduct, addProduct } = useCart();
  const [imageSource, setImageSource] = useState<any>(null);
  const [productSelected, setProductSelected] = useState<{
    id: number;
    title: string;
    tag: string;
    image: string;
    description: string;
    value: number;
  }>();
  const [amount, setAmount] = useState(product.amount);

  const handleDeleteCoffee = (productId: number, size: string) =>
    deleteProduct(productId, size);

  useEffect(() => {
    if (product?.id) {
      const foundProduct = OUR_COFFEES.flatMap(
        (category) => category.data
      ).find((item) => item.id === product.id);

      setProductSelected(foundProduct);
    }
  }, [product?.id]);

  useEffect(() => {
    if (productSelected && productSelected?.image) {
      const imageMap: { [key: string]: any } = {
        americano: require("../../assets/images/americano.png"),
        arabe: require("../../assets/images/arabe.png"),
        expresso: require("../../assets/images/expresso.png"),
        capuccino: require("../../assets/images/capuccino.png"),
        "chocolate-quente": require("../../assets/images/chocolate-quente.png"),
        cubano: require("../../assets/images/cubano.png"),
        havaiano: require("../../assets/images/havaiano.png"),
        latte: require("../../assets/images/latte.png"),
        mochaccino: require("../../assets/images/mochaccino.png"),
        irlandes: require("../../assets/images/irlandes.png"),
      };
      setImageSource(imageMap[productSelected?.image] || null);
    }
  }, [productSelected]);

  return (
    <Animated.View exiting={LightSpeedOutRight}>
      <Swipeable
        onSwipeableOpen={() => handleDeleteCoffee(product.id, product.size)}
        leftThreshold={80}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderLeftActions={() => (
          <View style={styles.backContainer}>
            <TrashSvg
              width={28}
              height={28}
              fill={THEME.COLORS.FEEDBACKS.RED_DAR}
            />
          </View>
        )}
      >
        <View style={styles.container}>
          {imageSource ? (
            <Image width={64} height={64} source={imageSource} />
          ) : (
            <Text>Imagem não encontrada</Text>
          )}

          <View
            style={{
              flex: 1,
              gap: 8,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1, gap: 4 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: THEME.COLORS.BASE.GRAY_100,
                  }}
                >
                  {productSelected?.title ?? ""}
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    color: THEME.COLORS.BASE.GRAY_400,
                  }}
                >
                  {product.size} ml
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: THEME.COLORS.BASE.GRAY_100,
                }}
              >
                R$ {productSelected?.value.toFixed(2) ?? 0}
              </Text>
            </View>

            <View
              style={{
                gap: 8,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  gap: 6,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: THEME.COLORS.BASE.GRAY_600,
                }}
              >
                <ButtonAddAndRemove
                  type="remove"
                  onPress={() => {
                    if (amount > 1) {
                      setAmount(amount - 1);
                      addProduct(
                        productSelected?.id ?? 1,
                        productSelected?.title ?? "",
                        productSelected?.description ?? "",
                        productSelected?.value ?? 0,
                        amount - 1,
                        product.size
                      );
                    }
                  }}
                />

                <Text
                  style={{
                    fontSize: 16,
                    color: THEME.COLORS.BASE.GRAY_100,
                  }}
                >
                  {amount}
                </Text>

                <ButtonAddAndRemove
                  type="add"
                  onPress={() => {
                    setAmount(amount + 1);
                    addProduct(
                      productSelected?.id ?? 1,
                      productSelected?.title ?? "",
                      productSelected?.description ?? "",
                      productSelected?.value ?? 0,
                      amount + 1,
                      product.size
                    );
                  }}
                />
              </View>

              <ButtonDelete
                onPress={() => deleteProduct(product.id, product.size)}
              />
            </View>
          </View>
        </View>
      </Swipeable>
    </Animated.View>
  );
}
