import { AdvertisementForm } from "@components/AdvertisementForm";
import { Button } from "@components/Button";
import { ContainerDefault } from "@components/ContainerDefault";
import { HeaderPages } from "@components/HeaderPages";
import { HStack } from "@gluestack-ui/themed";
import { Box, Button as GluestackButton } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "phosphor-react-native";

export const AdCreatedPage = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToPreview = () => {
    navigation.navigate("adPreview");
  };

  return (
    <>
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
            title="Criar anúncio"
            isButtonLeft
            IconButtonLeft={() => {
              return (
                <GluestackButton
                  position="absolute"
                  left={0}
                  top={15}
                  onPress={handleGoBack}
                  bg="transparent"
                >
                  <ArrowLeft size={28} weight="light" />
                </GluestackButton>
              );
            }}
          />

          <AdvertisementForm />

          <HStack
            w={"$full"}
            gap={10}
            alignItems="center"
            justifyContent="space-between"
            p={"$5"}
          >
            <Button
              w={"$40"}
              title="Cancelar"
              onPress={handleGoBack}
              type="secondary"
            />
            <Button
              w={"$40"}
              title="Avançar"
              onPress={handleGoToPreview}
              type="black"
            />
          </HStack>
        </Box>
      </ContainerDefault>
    </>
  );
};
