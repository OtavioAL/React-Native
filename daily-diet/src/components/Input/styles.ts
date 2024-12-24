import styled from "styled-components/native";

export interface IPropsInputTextStyles {
  multiline?: boolean;
  width?: string;
}

export const Container = styled.View<IPropsInputTextStyles>`
  width: ${({ width }) => width};
  gap: 5px;
  /* flex: 1; */
  /* max-height: ${({ multiline }) => (multiline ? "145px" : "70px")}; */
  max-height: auto;
`;

export const InputText = styled.TextInput<IPropsInputTextStyles>`
  height: ${({ multiline }) => (multiline ? "120px" : "48px")};
  min-height: ${({ multiline }) => (multiline ? "120px" : "48px")};
  max-height: ${({ multiline }) => (multiline ? "120px" : "48px")};
  padding: 14px;
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.regular};
  border: 1px solid ${({ theme }) => theme.COLORS.gray_300};
  border-radius: 6px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.sm}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
`;
