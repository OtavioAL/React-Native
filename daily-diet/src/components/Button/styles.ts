import styled from "styled-components/native";
import theme from "../../theme";

export interface ButtonStylesProps {
  bgColor?: string;
  color?: string;
  width?: string;
  type?: "primary" | "secondary";
}

export const Container = styled.TouchableOpacity<ButtonStylesProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: ${(props) => props?.width};
  height: 50px;
  border-radius: 6px;
  background-color: ${(props) => props?.bgColor};
  color: ${(props) => props?.color};
  border: ${(props) =>
    props?.type === "secondary"
      ? `1px solid ${theme.COLORS.gray_700}`
      : "none"};
`;

export const TitleButton = styled.Text<ButtonStylesProps>`
  font-family: ${theme.FONTS.fontFamilys.bold};
  font-size: ${theme.FONTS.fontSizes.sm}px;
  color: ${(props) => props?.color};
`;
