import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../../../routes";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { THEME } from "../../../../theme";
import { useEffect } from "react";
import { styles } from "./styles";
import { Header } from "../Header";

interface IProps {
  scrollY: SharedValue<number>;
}

export function HeaderFixed({ scrollY }: IProps) {
  const header = useSharedValue(0);

  const animatedHeader = useAnimatedStyle(() => {
    return {
      height: interpolate(header.value, [0, 1], [0, 60], "clamp"),
      backgroundColor: interpolateColor(
        scrollY.value,
        [242, 440],
        [THEME.COLORS.BASE.GRAY_100, THEME.COLORS.BASE.WHITE]
      ),
    };
  });

  useEffect(() => {
    header.value = withTiming(1, { duration: 700 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedHeader]}>
      <Header />
    </Animated.View>
  );
}
