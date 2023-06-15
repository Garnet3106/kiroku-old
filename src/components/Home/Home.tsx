import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LayoutVariable } from "../../common/layout";
import TaskList from "./TaskList/TaskList";
import ProgressChart from "../common/ProgressChart";
import { useSelector } from "react-redux";
import { RootState } from "../../common/redux/slices";
import { Task } from "../../common/task";

export default function Home() {
  const tasks = useSelector((state: RootState) => state.tasks);

  const windowDimensions = useWindowDimensions();
  const height = windowDimensions.width * 0.5;
  const todayProgressRatio = Task.getTodayProgressRatio(tasks);

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
          ratio={todayProgressRatio}
          wrapperSize={LayoutVariable.progressChart.wrapperSize}
          radius={LayoutVariable.progressChart.radius}
        />
      </View>
      <ScrollView style={{
        height: bodyHeight,
      }}>
        <TaskList tasks={tasks} />
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
