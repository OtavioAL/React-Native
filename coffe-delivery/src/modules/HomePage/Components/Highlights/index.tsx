import { Dimensions, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { OUR_COFFEES_BANNER } from "../../../../utils/coffes";
import { Coffee } from "../../../../components/Coffee";
import { useEffect } from "react";

export function Highlights() {
  const CARD_SIZE = 208;
  const ITEM_SPACE = (Dimensions.get("window").width - CARD_SIZE) / 2;
  const slip = useSharedValue(0);
  const scrollX = useSharedValue(0);

  const animatedSlides = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            slip.value,
            [0, 1],
            [CARD_SIZE + 100, -20],
            "clamp"
          ),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    slip.value = withDelay(1000, withTiming(1, { duration: 700 }));
  }, []);

  return (
    <View
      style={{
        marginTop: -90,
        zIndex: 4,
      }}
    >
      <Animated.FlatList
        style={[animatedSlides, { maxHeight: 300 }]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={OUR_COFFEES_BANNER}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingTop: 40,
          paddingHorizontal: ITEM_SPACE - 20,
        }}
        bounces={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToInterval={CARD_SIZE}
        onScroll={scrollHandler}
        renderItem={({ item, index }) => (
          <Coffee
            key={index}
            index={index}
            card_size={CARD_SIZE}
            space={ITEM_SPACE}
            scrollX={scrollX}
            product={item}
          />
        )}
      />
    </View>
  );
}
