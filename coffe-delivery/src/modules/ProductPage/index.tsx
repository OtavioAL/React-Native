import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { RouteParamsList } from "../../routes";
import { Button } from "../../components/Button";
import { ButtonAddAndRemove } from "../../components/ButtonAddAndRemove";
import { styles } from "./styles";
import { useCart } from "../../context/CartContext";
import { THEME } from "../../theme";
import { Header } from "./components/Header";
import { OUR_COFFEES } from "../../utils/coffes";
import { SizeOptions } from "./components/SizeOptions";

interface RouteParams {
  id: number;
  tag: string;
  title: string;
  description: string;
  value: number;
}

interface IPropsProduct {
  id: number;
  title: string;
  tag: string;
  image: string;
  description: string;
  value: number;
}

export function ProductPage() {
  const routes = useRoute();
  const params = routes.params as RouteParams;
  const [productSelected, setProductSelected] = useState<IPropsProduct>();
  const navigation = useNavigation<RouteParamsList>();
  const { addProduct } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);

  const handleIncrementAmount = () => setAmount(amount + 1);

  const handleDecrementAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleAddCoffee = async () => {
    if (!selectedSize) {
      setError(true);

      return;
    }
    setError(false);

    addProduct(
      productSelected?.id ?? params.id,
      productSelected?.title ?? params.title,
      productSelected?.description ?? params.description,
      productSelected?.value ?? params.value,
      amount,
      selectedSize
    );

    navigation.navigate("home");
  };

  useEffect(() => {
    if (selectedSize) setError(false);
  }, [selectedSize]);

  useEffect(() => {
    if (params?.id) {
      const foundProduct = OUR_COFFEES.flatMap(
        (category) => category.data
      ).find((item) => item.id === params?.id);

      setProductSelected(foundProduct);
    }
  }, [params]);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: THEME.COLORS.BASE.GRAY_100,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            padding: 10,
          }}
        >
          <Header
            tag={productSelected?.tag ?? params.tag}
            title={productSelected?.title ?? params.title}
            description={productSelected?.description ?? params.description}
            value={productSelected?.value ?? params.value}
          />

          <View style={styles.footer}>
            <SizeOptions
              error={error}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            <View style={styles?.contentFooter}>
              <ButtonAddAndRemove
                type="remove"
                onPress={handleDecrementAmount}
              />

              <Text style={styles.textAmount}>{amount}</Text>

              <ButtonAddAndRemove type="add" onPress={handleIncrementAmount} />

              <View style={{ flex: 1 }}>
                <Button text="Adicionar" onPress={handleAddCoffee} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
