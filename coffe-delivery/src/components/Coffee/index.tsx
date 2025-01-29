import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { styles } from "./styles";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";
import { useEffect, useState } from "react";
import { Options } from "../Options";

interface Props {
  index: number;
  card_size: number;
  space: number;
  scrollX: SharedValue<number>;
  product: {
    id: number;
    title: string;
    tag: string;
    image: string;
    description: string;
    value: number;
  };
}

export function Coffee({ index, card_size, space, scrollX, product }: Props) {
  const navigation = useNavigation<RouteParamsList>();
  const [imageSource, setImageSource] = useState<any>(null);

  const range = [
    (index - 1) * card_size,
    index * card_size,
    (index + 1) * card_size,
  ];

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, range, [0.7, 1, 0.7], "extend");

    return { transform: [{ scale: scale }] };
  }, [scrollX.value]);

  useEffect(() => {
    if (product?.image) {
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
      setImageSource(imageMap[product.image] || null);
    }
  }, [product?.image]);

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyles,
        {
          width: card_size,
        },
      ]}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("product", {
            id: product.id,
          })
        }
        style={{ flex: 1 }}
      >
        {imageSource ? (
          <Image
            source={imageSource}
            style={{
              position: "relative",
              alignSelf: "center",
              marginTop: -40,
              width: 100,
              height: 100,
            }}
          />
        ) : (
          <Text>Imagem não encontrada</Text>
        )}
        <View
          style={{
            flex: 1,
            gap: 18,
            alignItems: "center",
            padding: 12,
          }}
        >
          <Options title={product.tag} />

          <View
            style={{ gap: 4, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.title}>{product.title}</Text>

            <Text style={styles?.description}>{product.description}</Text>
          </View>

          <Text style={styles?.labelPrice}>
            R$
            <Text style={styles.valuePrice}> {product.value.toFixed(2)}</Text>
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
}
