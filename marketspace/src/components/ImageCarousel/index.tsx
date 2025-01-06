import { Image, View, VStack } from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import { Dimensions, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import image from "../../assets/image-cover-card.png";
import { useSharedValue, withTiming } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const ImageCarousel = ({ images }: any) => {
  console.log(images);

  // Usando o useSharedValue para criar o valor compartilhado
  const scrollOffsetValue = useSharedValue(0);

  useEffect(() => {
    // Aqui, você pode atualizar o scrollOffsetValue de maneira segura, fora da renderização
    scrollOffsetValue.value = withTiming(1, { duration: 1000 });
  }, []);

  return (
    <Carousel
      testID={"xxx"}
      loop={false}
      width={width}
      autoPlay={false}
      data={images}
      scrollAnimationDuration={1000}
      snapEnabled={true}
      pagingEnabled={true}
      autoPlayInterval={2000}
      defaultScrollOffsetValue={scrollOffsetValue}
      // onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index, item }) => (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Exemplo de exibição de imagens */}
          <Image source={image} style={{ width: "100%", height: "100%" }} />
        </View>
      )}
    />
  );
};

export default ImageCarousel;
