import { Text } from "react-native";
import {
  Card,
  Container,
  ContainerRow,
  Content,
  HeaderPage,
  TextCard,
  Title,
  TitleCard,
} from "./styles";
import { StatisticsBanner } from "../../components/StatisticsBanner";
import theme from "../../theme";

export default function Statistics() {
  return (
    <Container bgColor={theme.COLORS.green_light}>
      <HeaderPage bgColor={theme.COLORS.green_light}>
        <StatisticsBanner
          title={"90,86%"}
          subtitle="das refeições dentro da dieta"
          bgColor={"green"}
          iconPosition="left"
          // style={{ marginBottom: 40 }}
          onPress={() => {}}
        />
      </HeaderPage>
      <Content>
        <Title>Estatísticas gerais</Title>

        <Card bgColor={theme.COLORS.gray_300}>
          <TitleCard>22</TitleCard>
          <TextCard>melhor sequência de pratos dentro da dieta</TextCard>
        </Card>
        <Card bgColor={theme.COLORS.gray_300}>
          <TitleCard>109</TitleCard>
          <TextCard>refeições registradas</TextCard>
        </Card>

        <ContainerRow>
          <Card bgColor={theme.COLORS.green_light}>
            <TitleCard>99</TitleCard>
            <TextCard>refeições dentro da dieta</TextCard>
          </Card>
          <Card bgColor={theme.COLORS.red_light}>
            <TitleCard>10</TitleCard>
            <TextCard>refeições fora da dieta</TextCard>
          </Card>
        </ContainerRow>
      </Content>
    </Container>
  );
}
