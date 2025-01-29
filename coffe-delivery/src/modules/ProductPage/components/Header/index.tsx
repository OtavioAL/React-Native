import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteParamsList } from "../../../../routes";
import ArrowSvg from "../../../../assets/icons/arrow-left.svg";
import { THEME } from "../../../../theme";
import { CartProduct } from "../../../../components/CartProduct";
import { Options } from "../../../../components/Options";
import { Smoke } from "../../../../components/Smoke";

interface RouteParams {
  id: number;
  tag: string;
  title: string;
  description: string;
  value: number;
}

interface IProps {
  title: string;
  tag: string;
  description: string;
  value: number;
}

export function Header({ description, tag, title, value }: IProps) {
  const navigation = useNavigation<RouteParamsList>();
  const handleGoBack = () => navigation.goBack();
  return (
    <>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <TouchableOpacity onPress={handleGoBack}>
            <ArrowSvg
              width={24}
              height={24}
              fill={THEME.COLORS.BASE.GRAY_900}
            />
          </TouchableOpacity>

          <CartProduct />
        </View>

        <View>
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <Options title={tag} variant="secondary" />
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 24,
                fontWeight: "700",
                color: THEME.COLORS.BASE.GRAY_900,
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: THEME.COLORS.PRODUCT.YELLOW,
              }}
            >
              R${" "}
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "700",
                  color: THEME.COLORS.PRODUCT.YELLOW,
                }}
              >
                {" "}
                {value}
              </Text>
            </Text>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: THEME.COLORS.BASE.GRAY_900,
            }}
          >
            {description}
          </Text>
        </View>

        <View
          style={{ position: "absolute", bottom: -60, alignSelf: "center" }}
        >
          <Smoke />

          <Image
            source={require("../../../../assets/images/cup.png")}
            width={295}
            height={260}
          />
        </View>
      </View>
    </>
  );
}
