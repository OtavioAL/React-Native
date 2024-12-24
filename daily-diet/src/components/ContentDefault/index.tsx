import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import { Container, ContainerIconBack, Content, Header, Title } from "./styles";
import { ArrowLeft } from "phosphor-react-native";

interface IProps {
  children: React.ReactNode;
  title: string;
  backgroundColor: string;
}

export const ContentDefault = ({
  children,
  backgroundColor,
  title,
}: IProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <Header backgroundColor={backgroundColor}>
        <ContainerIconBack onPress={handleGoBack}>
          <ArrowLeft size={24} color={theme.COLORS.gray_600} />
        </ContainerIconBack>

        <Title>{title}</Title>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
};
