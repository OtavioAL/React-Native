import { VStack } from "@gluestack-ui/themed";
import { ListImages } from "./components/ListImages";
import { AdvertiserUser } from "./components/AdvertiserUser";
import { Description } from "./components/Description";
import { OptionsAds } from "./components/OptionsAds";

export function ContentAd() {
  return (
    <VStack w={"$full"}>
      <ListImages />

      <AdvertiserUser />

      <Description />

      <OptionsAds />
    </VStack>
  );
}
