import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import ListTasks from "@/components/ListTasks";
import Header from "@/components/Header";

export type PropsTasks = {
  id: number;
  text: string;
  isFinished: boolean;
};

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [listTasks, setListTasks] = useState<Array<PropsTasks>>([]);
  const [numberTaskFinished, setNumberTaskFinished] = useState<number>(0);

  const handleAddNewTask = (task: string) => {
    if (!task.length)
      return Alert.alert("Por favor, insira uma tarefa valida.");

    setListTasks((oldState) => [
      ...oldState,
      {
        id: oldState?.length + 1,
        text: task,
        isFinished: false,
      },
    ]);
    setTask("");
  };

  useEffect(() => {
    if (listTasks) {
      const finishedTasksCount = listTasks.reduce((acc, task) => {
        return task.isFinished ? acc + 1 : acc;
      }, 0);

      setNumberTaskFinished(finishedTasksCount);
    }
  }, [listTasks]);

  return (
    // <SafeAreaView style={styles.safeAreaView}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.containerInput}>
          <Input
            value={task}
            onChangeText={(text: string) => setTask(text)}
            placeholder="Adicione uma nova tarefa"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddNewTask(task)}
          >
            <Image source={require("@/assets/images/addTask.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerInformation}>
          <View style={styles.containerInformationTask}>
            <Text style={styles.taskCreated}>Criadas</Text>

            <View style={styles.containerTextQuantity}>
              <Text style={styles.textQuantity}>{listTasks?.length}</Text>
            </View>
          </View>
          <View style={styles.containerInformationTask}>
            <Text style={styles.taskFinished}>Concluidas</Text>
            <View style={styles.containerTextQuantity}>
              <Text style={styles.textQuantity}>{numberTaskFinished}</Text>
            </View>
          </View>
        </View>

        <ListTasks listTasks={listTasks} setListTasks={setListTasks} />
      </View>
    </View>
    // </SafeAreaView>
  );
}
