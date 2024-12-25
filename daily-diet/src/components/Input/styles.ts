import styled from "styled-components/native";

export interface IPropsInputTextStyles {
  multiline?: boolean;
  width?: string;
  error?: boolean;
}

export const Container = styled.View<IPropsInputTextStyles>`
  width: ${({ width }) => width};
  margin-bottom: ${(props) => (props.error ? "20px" : "10px")};
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
  align-items: flex-start;
  justify-content: flex-start;
  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.COLORS.red_dark}`
      : `1px solid ${theme.COLORS.gray_300}`};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.fontFamilys.bold};
  font-size: ${({ theme }) => theme.FONTS.fontSizes.sm}px;
  color: ${({ theme }) => theme.COLORS.gray_600};
`;

export const ErrorMessage = styled.Text`
  position: absolute;
  font-size: ${({ theme }) => theme.FONTS.fontSizes.sm}px;
  color: ${({ theme }) => theme.COLORS.red_dark};
  bottom: -30px;
  margin-bottom: 15px;
`;
