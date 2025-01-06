import { ContainerDefault } from "@components/ContainerDefault";
import { Box } from "@gluestack-ui/themed";
import { Header } from "./components/Header";
import { Filters } from "./components/Filters";
import { CardList } from "../HomePage/components/CardList";

export const MyAdsPage = () => {
  return (
    <ContainerDefault>
      <Box
        flex={1}
        mt={30}
        // gap={"$10"}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Header />

        <Filters />

        <CardList isMyAd />
      </Box>
    </ContainerDefault>
  );
};
