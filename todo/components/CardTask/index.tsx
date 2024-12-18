import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@/styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  isFinished: boolean;
  task: string;
  idTask: number;
  handleCompleteTask: (idTask: number) => void;
  handleRemoveTask: (idTask: number) => void;
};

export default function CardTask({
  isFinished,
  task,
  handleCompleteTask,
  handleRemoveTask,
  idTask,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonCompleteTask}
        onPress={() => handleCompleteTask(idTask)}
      >
        {isFinished ? (
          <Ionicons
            name="checkmark-done-circle"
            size={24}
            color={colors.purple}
          />
        ) : (
          <Entypo name="circle" size={24} color={colors.blue} />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, isFinished && styles.taskFinished]}>
        {task}
      </Text>

      <TouchableOpacity
        onPress={() => handleRemoveTask(idTask)}
        style={styles.buttonRemoveTask}
      >
        <AntDesign name="delete" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}
