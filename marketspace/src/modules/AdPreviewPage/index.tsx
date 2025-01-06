import { ContainerDefault } from "@components/ContainerDefault";
import { Box } from "@gluestack-ui/themed";
import { Footer } from "./components/Footer";

import { ContentAd } from "@components/ContentAd";
import { Header } from "./components/Header";

export const AdPreviewPage = () => {
  return (
    <ContainerDefault>
      <Box
        flex={1}
        mt={30}
        // gap={"$10"}
        alignItems="flex-start"
        justifyContent="flex-start"
        backgroundColor="$gray200"
      >
        <Header />

        <ContentAd />

        <Footer />
      </Box>
    </ContainerDefault>
  );
};
