import { Box } from "@gluestack-ui/themed";
import ImageCarousel from "@components/ImageCarousel";
import { IPropsImage } from "@components/interfaces";
import { api } from "@services/api";

interface IProps {
  images: Array<IPropsImage>;
}

export const ListImages = ({ images }: IProps) => {
  return (
    <Box w={"$full"} h={280} p={1} bg="$gray300" mb={"$2.5"}>
      <ImageCarousel
        images={images?.map(
          (image) =>
            image?.uri ?? `${api.defaults.baseURL}/images/${image?.path}`
        )}
      />
    </Box>
  );
};
