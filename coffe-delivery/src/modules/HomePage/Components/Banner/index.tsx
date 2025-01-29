import { Image, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./styles";
import { useEffect } from "react";
import { Input } from "../../../../components/Input";

export function Banner() {
  const banner = useSharedValue(0);

  const animatedbanner = useAnimatedStyle(() => {
    return {
      height: interpolate(banner.value, [0, 1], [0, 240], "clamp"),
    };
  });

  useEffect(() => {
    banner.value = withTiming(1, { duration: 1000 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedbanner]}>
      <Text style={styles.bannerText}>
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <View style={{ flex: 1 }}>
        <Input />

        <View>
          <Image
            source={require("../../../../assets/images/coffee-beans.png")}
            style={{ position: "absolute", right: -20 }}
          />
        </View>
      </View>
    </Animated.View>
  );
}
