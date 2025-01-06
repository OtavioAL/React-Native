import { Box, Text } from "@gluestack-ui/themed";
import imageBicicleta from "../../../../assets/image-cover-card-2.png";
import imageTenis from "../../../../assets/image-cover-card.png";
import ImageCarousel from "@components/ImageCarousel";
export const ListImages = () => {
  const images: Array<string> = [imageBicicleta, imageTenis, imageBicicleta];
  return (
    <Box w={"$full"} h={280} p={1} bg="$gray300" mb={"$2.5"}>
      <ImageCarousel images={images} />
    </Box>
  );
};
