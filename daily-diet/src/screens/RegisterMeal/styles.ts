import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_400};
  gap: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 80px;
  background-color: ${({ theme }) => theme.COLORS.gray_400};
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
  font-size: ${({ theme }) => theme.FONTS.fontSizes.md}px;
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

export const ContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.sm}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
`;

export interface IPropsOptionsSelect {
  isSelected?: boolean;
}

export const OptionsSelect = styled.TouchableOpacity<IPropsOptionsSelect>`
  flex: 1;
  height: 40px;
  background-color: ${({ theme, isSelected }) =>
    isSelected === undefined
      ? theme.COLORS.gray_300
      : isSelected
      ? theme.COLORS.green_light
      : theme.COLORS.red_light};
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected === undefined
        ? theme.COLORS.gray_300
        : isSelected
        ? theme.COLORS.green_dark
        : theme.COLORS.red_dark};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const IndicatorStatus = styled.View<{ isGreenOption?: boolean }>`
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: ${({ theme, isGreenOption }) =>
    isGreenOption ? theme.COLORS.green_dark : theme.COLORS.red_dark};
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex: 2;
`;
