import { AdCard } from "@components/AdCard";
import { ProductsDTO } from "@dtos/ProductsDTO";
import { Box, Center, Text } from "@gluestack-ui/themed";
import { api } from "@services/api";

interface IProps {
  isMyAd?: boolean;
  products: Array<ProductsDTO>;
}

export const CardList = ({ isMyAd, products }: IProps) => {
  return (
    <Box
      p={"$5"}
      alignItems="center"
      justifyContent="space-between"
      gap={20}
      flexDirection="row"
      flexWrap="wrap"
      bg="$gra700"
    >
      {!products?.length ? (
        <Center w={"$full"} h={"$full"}>
          <Text fontSize={"$md"} fontFamily="$body" color="$gray600">
            Nenhum anúncio encontrado.
          </Text>
        </Center>
      ) : (
        products?.map((product) => (
          <AdCard
            isMyAd={isMyAd}
            imageCoverCard={`${api.defaults.baseURL}/images/${product?.product_images[0]?.path}`}
            isNew={product?.is_new}
            name={product?.name}
            price={product?.price}
            key={product?.id}
            id={product?.id}
          />
        ))
      )}
    </Box>
  );
};
