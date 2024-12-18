import { PropsTasks } from "@/app/screens/Home";
import { Alert, FlatList, Image, Text, View } from "react-native";
import CardTask from "../CardTask";
import styles from "./styles";
import { colors } from "@/styles/colors";
import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
  listTasks: PropsTasks[];
  setListTasks: Dispatch<SetStateAction<Array<PropsTasks>>>;
};
export default function ListTasks({ listTasks, setListTasks }: Props) {
  const handleSortedTasks = () => {
    listTasks.sort((a, b) => {
      if (a.isFinished === b.isFinished) return 0;
      return a.isFinished ? 1 : -1;
    });
  };

  const handleCompleteTask = (idTask: number) => {
    setListTasks((oldState) =>
      oldState?.map((task) =>
        task?.id === idTask ? { ...task, isFinished: true } : task
      )
    );
  };
  const handleRemoveTask = (idTask: number) => {
    Alert.alert(
      "Remover item",
      "Tem certeza que você deseja remover esse item?.",
      [
        { text: "Não" },
        {
          text: "Sim",
          onPress: () =>
            setListTasks((oldState) =>
              oldState?.filter((task) => task?.id !== idTask)
            ),
        },
      ]
    );
  };

  useEffect(() => {
    handleSortedTasks();
  }, [listTasks]);

  return (
    <FlatList
      data={listTasks}
      keyExtractor={(item) => `${item?.id}`}
      renderItem={({ item }) => (
        <CardTask
          isFinished={item.isFinished}
          idTask={item?.id}
          task={item.text}
          handleCompleteTask={handleCompleteTask}
          handleRemoveTask={handleRemoveTask}
        />
      )}
      ListEmptyComponent={() => (
        <View style={styles.containerListEmpty}>
          <Image source={require("@/assets/images/clipboard.png")} />
          <Text
            style={[
              styles.textListEmpty,
              {
                color: colors.gray[200],
                marginTop: 15,
              },
            ]}
          >
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text
            style={[
              styles.textListEmpty,
              {
                color: colors.gray[300],
              },
            ]}
          >
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      )}
    />
  );
}
