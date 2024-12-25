import {
  Container,
  ErrorMessage,
  InputText,
  IPropsInputTextStyles,
  Label,
} from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends IPropsInputTextStyles, TextInputProps {
  label: string;
  width?: string;
  type?: "date" | "time" | "text";
  name: string;
  errors?: any;
  error?: any;
}

export const Input = ({
  label,
  multiline = false,
  width = "100%",
  type = "text",
  name,
  errors,
  error,
  ...props
}: InputProps) => {
  return (
    <Container multiline={multiline} width={width}>
      <Label>{label}</Label>

      <InputText
        multiline={multiline}
        numberOfLines={10}
        error={errors && errors[name] !== undefined}
        {...props}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </Container>
  );
};
