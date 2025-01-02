import { Heading, Image, Text } from "@gluestack-ui/themed";
import LogoImg from "../../../assets/logo.png";

interface IPropsHeaderPublicPage {
  title: string;
  description: string;
  widthLogo: number;
  heightLogo: number;
}

export function HeaderPublicPage({
  description,
  heightLogo,
  title,
  widthLogo,
}: IPropsHeaderPublicPage) {
  return (
    <>
      <Image
        source={LogoImg}
        aspectRatio={1.5}
        alt="Logitipo do Marketspace"
        rounded="$none"
        width={widthLogo}
        height={heightLogo}
      />

      <Heading color="$gray700" fontSize="$2xl" fontFamily="$heading">
        {title}
      </Heading>

      <Text
        color="$gray500"
        fontSize={"$md"}
        fontFamily="$body"
        textAlign="center"
      >
        {description}
      </Text>
    </>
  );
}
