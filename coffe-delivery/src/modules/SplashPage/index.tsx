import { Dimensions, View } from "react-native";
import { styles } from "./styles";
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

import Coffee from "../../assets/icons/coffee.svg";
import CoffeeDelivery from "../../assets/icons/coffee-delivery.svg";
import { RouteParamsList } from "../../routes";

const HEIGHT_SCREEN = Dimensions.get("window").height;
const WIDTH_SCREEN = Dimensions.get("window").width;

export function SplashPage() {
  const navigation = useNavigation<RouteParamsList>();

  const backgroundAnimation = useSharedValue(0);
  const cupOfCoffee = useSharedValue(0);
  const LogoAnimation = useSharedValue(0);

  const navigateTo = () => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 1000);
  };

  const animatedBackground = useAnimatedStyle(() => {
    return {
      width: interpolate(
        backgroundAnimation.value,
        [0, 1],
        [WIDTH_SCREEN, WIDTH_SCREEN + 60],
        "clamp"
      ),
      height: interpolate(
        backgroundAnimation.value,
        [0, 1],
        [HEIGHT_SCREEN, HEIGHT_SCREEN + 60],
        "clamp"
      ),
      borderRadius: interpolate(
        backgroundAnimation.value,
        [0, 1],
        [0, 0],
        "clamp"
      ),
      opacity: interpolate(backgroundAnimation.value, [0, 1], [0, 1], "clamp"),
    };
  });

  const coffeeAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(cupOfCoffee.value, [0, 1], [0, 1], "clamp"),
      transform: [
        {
          // translateX: interpolate(cupOfCoffee.value, [0, 1], [0, -20], "clamp"),
          translateY: interpolate(
            cupOfCoffee.value,
            [0, 1],
            [HEIGHT_SCREEN / 2, 0],
            "clamp"
          ),
        },
      ],
    };
  });

  const logoAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(LogoAnimation.value, [0, 1], [0, 1], "clamp"),
      transform: [
        {
          translateX: interpolate(
            LogoAnimation.value,
            [0, 1],
            [250, 0],
            "identity"
          ),
        },
      ],
    };
  });

  useEffect(() => {
    backgroundAnimation.value = withTiming(1, { duration: 1500 }, () => {
      (cupOfCoffee.value = withTiming(1, {
        duration: 1500,
        easing: Easing.ease,
      })),
        (LogoAnimation.value = withTiming(
          1,
          { duration: 1500, easing: Easing.ease },
          () => {
            "worklet";
            runOnJS(navigateTo)();
          }
        ));
    });
  }, []);

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.circle, animatedBackground]} />

      <View style={{ flexDirection: "row" }}>
        <Animated.View style={[styles.logo, coffeeAnimation]}>
          <Coffee width={42} />
        </Animated.View>

        <Animated.View style={[logoAnimated]}>
          <CoffeeDelivery width={90} />
        </Animated.View>
      </View>
    </Animated.View>
  );
}
