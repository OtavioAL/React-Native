import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../../theme";
import { styles } from "./styles";
import { View } from "react-native";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Highlights } from "./Components/Highlights";
import { Filters } from "./Components/Filters";
import { CoffeList } from "./Components/CofeeList";
import { ScrollView } from "react-native-gesture-handler";

export function HomePage() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: THEME.COLORS.BASE.GRAY_500 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Header />

          <Banner />

          <View
            style={{
              backgroundColor: THEME.COLORS.BASE.GRAY_600,
              gap: 20,
              minHeight: "100%",
              width: "100%",
            }}
          >
            <Highlights />

            <View
              style={{
                paddingHorizontal: 20,
                width: "100%",
              }}
            >
              <Filters />

              <CoffeList />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
