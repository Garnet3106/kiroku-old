import { StyleSheet, View } from "react-native";
import TaskItem from "./TaskItem";
import { Task } from "../../../common/task";

export type TaskListProps = {
  tasks: Task[],
};

export default function TaskList(props: TaskListProps) {
  const items = props.tasks.map((task) => <TaskItem task={task} key={Math.random()}/>);

  return (
    <View style={styles.container}>
      {items}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
