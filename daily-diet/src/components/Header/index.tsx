import { Container, Logo, Photo } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Logo source={require("../../../assets/logo.png")} />
      <Photo source={require("../../../assets/photo.png")} />
    </Container>
  );
};
