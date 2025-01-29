import { Text, View } from "react-native";
import { styles } from "./styles";
import { Options } from "../../../../components/Options";
import { FiltersOptions } from "../FiltersOptions";

export function Filters() {
  const OPTIONS_FILTERS = [
    {
      title: "Tradicionais",
      id: 1,
    },
    {
      title: "Doces",
      id: 2,
    },
    {
      title: "Especiais",
      id: 3,
    },
  ];

  return (
    <>
      <Text style={styles.title}>Nossos cafés</Text>

      <View style={styles.containerFilters}>
        {OPTIONS_FILTERS?.map((item) => (
          <FiltersOptions key={item.id} text={item.title} isSelected={false} />
        ))}
      </View>
    </>
  );
}
