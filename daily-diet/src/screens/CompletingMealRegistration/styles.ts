import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  padding: 24px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

interface IPropsColors {
  color: string;
}

export const Title = styled.Text<IPropsColors>`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.xl}px;
  color: ${({ color }) => color};
  text-align: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.regular};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.lg}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
  text-align: center;
`;

export const ContainerImage = styled.Image`
  width: 100%;
  height: 400px;
`;
