import { SafeAreaView } from "react-native-safe-area-context";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_100};
  padding: 24px;
  gap: 10px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.fontFamilys.regular};
    font-size: ${theme.FONTS.fontSizes.md}px;
    color: ${theme.COLORS.gray_500};
  `};
  margin: 10px 0;
`;
