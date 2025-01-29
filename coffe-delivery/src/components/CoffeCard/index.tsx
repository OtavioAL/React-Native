import { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  description: string;
  image: string;
  value: number;
};

export function CoffeCard({
  title,
  description,
  image,
  value,
  ...rest
}: Props) {
  const [imageSource, setImageSource] = useState<any>(null);

  useEffect(() => {
    if (image) {
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
      setImageSource(imageMap[image] || null);
    }
  }, [image]);

  return (
    <>
      <TouchableOpacity style={styles.container} {...rest}>
        {imageSource ? (
          <Image
            source={imageSource}
            style={{
              position: "relative",
              marginTop: -35,
              width: 100,
              height: 100,
            }}
          />
        ) : (
          <Image
            source={require("../../assets/images/expresso.png")}
            style={{
              position: "relative",
              marginTop: -35,
              width: 100,
              height: 100,
            }}
          />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.description}>{description}</Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: THEME.COLORS.PRODUCT.YELLOW_DARK,
            }}
          >
            R$
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: THEME.COLORS.PRODUCT.YELLOW_DARK,
              }}
            >
              {" "}
              {value.toFixed(2)}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
