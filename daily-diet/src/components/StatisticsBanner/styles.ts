import { css } from "styled-components";
import styled from "styled-components/native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";

export interface IPropsColorsStatisticsBanner {
  bgColor?: "green" | "red";
}

export const Container = styled.View<IPropsColorsStatisticsBanner>`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "red" ? theme.COLORS.red_light : theme.COLORS.green_light};
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 8px;
  min-height: 100px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.fontFamilys.bold};
    font-size: ${theme.FONTS.fontSizes.xxl}px;
    color: ${theme.COLORS.gray_700};
  `};
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.fontFamilys.regular};
    font-size: ${theme.FONTS.fontSizes.sm}px;
    color: ${theme.COLORS.gray_500};
  `};
`;

export const ContainerArrowUpRight = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
`;

export const IconArrowUpRight = styled(
  ArrowUpRight
).attrs<IPropsColorsStatisticsBanner>(({ theme, bgColor }) => ({
  size: 24,
  color: bgColor === "green" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
}))``;

export const ContainerArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
`;

export const IconArrowBack = styled(
  ArrowLeft
).attrs<IPropsColorsStatisticsBanner>(({ theme, bgColor }) => ({
  size: 24,
  color: bgColor === "green" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
}))``;
