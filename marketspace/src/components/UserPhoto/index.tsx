import { Image, VStack } from "@gluestack-ui/themed";
import { PencilLine } from "phosphor-react-native";
import { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";
type Props = ComponentProps<typeof Image> & {
  isEdit?: boolean;
};
export function UserPhoto({ isEdit = false, ...props }: Props) {
  return (
    <TouchableOpacity
      style={{
        position: "relative",
      }}
      disabled={!isEdit}
    >
      <Image
        rounded="$full"
        borderWidth="$2"
        borderColor="$blue500"
        backgroundColor="$gray500"
        {...props}
      />

      {isEdit && (
        <VStack
          position="absolute"
          bottom={15}
          right={"-$2"}
          bg={"$blue500"}
          p={10}
          borderRadius={"$full"}
        >
          <PencilLine size={16} color="#fff" />
        </VStack>
      )}
    </TouchableOpacity>
  );
}
