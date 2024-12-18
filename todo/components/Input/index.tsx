import { colors } from "@/styles/colors";
import { TextInput } from "react-native";
import styles from "./styles";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

export default function Input({ onChangeText, value, placeholder }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.gray[300]}
    />
  );
}
