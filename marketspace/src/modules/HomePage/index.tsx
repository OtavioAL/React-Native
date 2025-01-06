import { ContainerDefault } from "@components/ContainerDefault";
import { Box, Text, VStack } from "@gluestack-ui/themed";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Filter } from "./components/Filter";
import { CardList } from "./components/CardList";
import { ModalFilters } from "./components/ModalFilters";
import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const HomePage = () => {
  const [isShowModalFilters, setIsShowModalFilters] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsShowModalFilters(true);
  }, []);

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

        <Banner />

        <Filter handlePresentModalPress={handlePresentModalPress} />

        <CardList />

        {isShowModalFilters && (
          <ModalFilters bottomSheetModalRef={bottomSheetModalRef} />
        )}
      </Box>
    </ContainerDefault>
  );
};
