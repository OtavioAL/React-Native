import { Text, View } from "react-native";
import { THEME } from "../../../../theme";
import { Select } from "../../../../components/Select";
import { Dispatch, SetStateAction } from "react";
import { styles } from "./styles";

interface IProps {
  error: boolean;
  selectedSize: string;
  setSelectedSize: Dispatch<SetStateAction<string>>;
}

export function SizeOptions({ error, selectedSize, setSelectedSize }: IProps) {
  return (
    <>
      <View>
        <Text
          style={[
            styles?.textTitle,
            {
              color: error
                ? THEME.COLORS.FEEDBACKS.RED_DAR
                : THEME.COLORS.BASE.GRAY_400,
            },
          ]}
        >
          Selecione o tamanho:
        </Text>

        <View style={styles?.containerRow}>
          <Select
            text="114ml"
            selected={selectedSize === "114"}
            onPress={() => setSelectedSize("114")}
            error={error}
          />

          <Select
            text="140ml"
            selected={selectedSize === "140"}
            onPress={() => setSelectedSize("140")}
            error={error}
          />

          <Select
            text="227ml"
            selected={selectedSize === "227"}
            onPress={() => setSelectedSize("227")}
            error={error}
          />
        </View>
      </View>
    </>
  );
}
