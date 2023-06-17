import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LayoutVariable } from "../../common/layout";
import TaskList from "./TaskList/TaskList";
import ProgressChart from "../common/ProgressChart";
import { useSelector } from "react-redux";
import { RootState } from "../../common/redux/redux";
import { Task, TaskProgress } from "../../common/task";

export default function Home() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const taskProgress = useSelector((state: RootState) => state.taskProgress);
  const todayProgress = TaskProgress.getTodayProgress(taskProgress);
  const todayProgressStats = TaskProgress.getProgressStats(tasks, todayProgress, Task.getTargetTimeSum(tasks));

  const windowDimensions = useWindowDimensions();
  const height = windowDimensions.width * 0.5;

  const containerHeight = windowDimensions.height - LayoutVariable.footerHeight;
  const headerHeight = LayoutVariable.statusBarHeight + height;
  const bodyHeight = containerHeight - headerHeight;

  return (
    <View style={[
      styles.container,
      {
        height: containerHeight,
      },
    ]}>
      <View style={[
        styles.header,
        {
          height: headerHeight,
        },
      ]}>
        <ProgressChart
          ratio={todayProgressStats.ratio}
          wrapperSize={LayoutVariable.progressChart.wrapperSize}
          radius={LayoutVariable.progressChart.radius}
        />
      </View>
      <ScrollView style={{
        height: bodyHeight,
      }}>
        <TaskList tasks={tasks.filter((v) => !v.archived)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: 'center',
    backgroundColor: LayoutVariable.color.background,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: LayoutVariable.statusBarHeight,
  },
});
