import { Container, InputText, IPropsInputTextStyles, Label } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends IPropsInputTextStyles, TextInputProps {
  label: string;
  width?: string;
}

export const Input = ({
  label,
  multiline = false,
  width = "100%",
  ...props
}: InputProps) => {
  function handleChange(text: string) {}

  return (
    <Container multiline={multiline} width={width}>
      <Label>{label}</Label>

      <InputText
        multiline={multiline}
        numberOfLines={10}
        onChangeText={(text) => handleChange(text)}
        {...props}
      />
    </Container>
  );
};
