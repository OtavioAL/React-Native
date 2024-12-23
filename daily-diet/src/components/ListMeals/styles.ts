import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.lg}px;
  color: ${({ theme }) => theme.COLORS.gray_700};
  margin-bottom: 5px;
  margin-top: 20px;
`;
