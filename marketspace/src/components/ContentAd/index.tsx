import { VStack } from "@gluestack-ui/themed";
import { ListImages } from "./components/ListImages";
import { AdvertiserUser } from "./components/AdvertiserUser";
import { Description } from "./components/Description";
import { OptionsAds } from "./components/OptionsAds";
import { useRoute } from "@react-navigation/native";
import { RouteParamsAdPreview } from "@components/interfaces";
import { ProductsDTO } from "@dtos/ProductsDTO";

interface IProps {
  product?: ProductsDTO;
}

export function ContentAd({ product }: IProps) {
  const route = useRoute();
  const {
    title,
    description,
    value,
    listImages,
    paymentMethods,
    isNew,
    isAcceptExchange,
    imageUser,
    nameUser,
  } = route.params as RouteParamsAdPreview;

  return (
    <VStack w={"$full"}>
      <ListImages images={listImages ?? product?.product_images} />

      {nameUser?.length && imageUser && (
        <AdvertiserUser name={nameUser ?? ""} image={imageUser} />
      )}

      <Description
        title={title ?? product?.name ?? ""}
        description={description ?? product?.description ?? ""}
        value={value ?? `${product?.price}` ?? ""}
        isNew={isNew ?? product?.is_new}
      />

      <OptionsAds
        isAcceptExchange={isAcceptExchange ?? product?.accept_trade}
        paymentMethods={
          paymentMethods ??
          product?.payment_methods?.map((method) => method?.key)
        }
      />
    </VStack>
  );
}
