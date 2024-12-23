import styled from "styled-components/native";
import theme from "../../theme";

export interface ButtonStylesProps {
  bgColor?: string;
  color?: string;
  width?: string;
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
`;

export const TitleButton = styled.Text<ButtonStylesProps>`
  font-family: ${theme.FONTS.fontFamilys.bold};
  font-size: ${theme.FONTS.fontSizes.sm}px;
  color: ${(props) => props?.color};
`;
