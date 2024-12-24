import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface IPropsColors {
  backgroundColor: string;
}

export const Container = styled(SafeAreaView)<IPropsColors>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  gap: 10px;
`;

export const Header = styled.View<IPropsColors>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 80px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ContainerIconBack = styled.TouchableOpacity`
  width: 100px;
  padding: 8px;
  position: absolute;
  top: 20px;
  left: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.lg}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  gap: 10px;
`;
