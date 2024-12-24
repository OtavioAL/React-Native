import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export interface IPropsColorsStatistics {
  bgColor?: string;
}

export const Container = styled(SafeAreaView)<IPropsColorsStatistics>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
  /* padding: 24px; */
`;

export const HeaderPage = styled.View<IPropsColorsStatistics>`
  width: 100%;
  padding: 10px;
  background-color: ${({ bgColor }) => bgColor};
  min-height: 170px;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  gap: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.md}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const Card = styled.View<IPropsColorsStatistics>`
  background-color: ${({ bgColor }) => bgColor};
  flex: 1;
  width: 100%;
  max-height: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const TitleCard = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.xl}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const TextCard = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.regular};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.md}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
  text-align: center;
`;

export const ContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
