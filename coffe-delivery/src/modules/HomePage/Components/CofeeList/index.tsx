import { useState } from "react";
import { SectionList, Text } from "react-native";
import { OUR_COFFEES } from "../../../../utils/coffes";
import { styles } from "./styles";
import { CoffeCard } from "../../../../components/CoffeCard";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../../../routes";

export function CoffeList() {
  const navigation = useNavigation<RouteParamsList>();

  const handleRedirectTo = (id: number) => {
    navigation.navigate("product", {
      id,
    });
  };

  return (
    <>
      <SectionList
        sections={OUR_COFFEES.map((coffe) => ({
          title: coffe.title,
          data: coffe.data,
        }))}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Text>Não há nenhum café cadastrado ainda.</Text>
          </>
        )}
        contentContainerStyle={[
          {
            gap: 20,
          },
          !OUR_COFFEES?.length && {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <CoffeCard
            description={item?.description}
            image={item?.image}
            title={item?.title}
            value={item?.value}
            onPress={() => handleRedirectTo(item.id)}
          />
        )}
        style={{ marginBottom: 32 }}
      />
    </>
  );
}
