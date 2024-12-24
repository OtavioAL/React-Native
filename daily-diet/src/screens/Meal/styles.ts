import styled from "styled-components/native";
import { IPropsOptionsSelect } from "../RegisterMeal/styles";

export const Container = styled.View`
  flex: 1;
  gap: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.lg}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.regular};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.md}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
`;

export const TextDate = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.sm}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const OptionsSelect = styled.TouchableOpacity<IPropsOptionsSelect>`
  max-width: 150px;
  /* height: 30px; */
  background-color: ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
  padding: 5px 5px 5px 15px;
`;

export const IndicatorStatus = styled.View<{ isGreenOption?: boolean }>`
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: ${({ theme, isGreenOption }) =>
    isGreenOption ? theme.COLORS.green_dark : theme.COLORS.red_dark};
`;
