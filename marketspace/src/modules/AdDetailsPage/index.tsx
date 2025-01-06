import { ContainerDefault } from "@components/ContainerDefault";
import { Box } from "@gluestack-ui/themed";
import { Footer } from "./components/Footer";
import { HeaderPages } from "@components/HeaderPages";
import { Button as GluestackButton } from "@gluestack-ui/themed";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ContentAd } from "@components/ContentAd";

export const AdDetailsPage = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => {
    navigation.goBack();
  };

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
        <HeaderPages
          isButtonLeft
          IconButtonLeft={() => {
            return (
              <GluestackButton
                position="absolute"
                left={0}
                top={5}
                onPress={handleGoBack}
                bg="transparent"
              >
                <ArrowLeft size={28} weight="light" />
              </GluestackButton>
            );
          }}
        />

        <ContentAd />

        <Footer />
      </Box>
    </ContainerDefault>
  );
};
