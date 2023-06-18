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
        <View style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 15,
        }}>
          <View style={styles.level}>
            <Text style={styles.levelText}>
              {'lv\n15'}
            </Text>
          </View>
          <View>
            <Text style={styles.userTitle}>
              ニューチャレンジャー
            </Text>
            <Text style={styles.levelCaption}>
              lv16まであと10pt
            </Text>
          </View>
        </View>
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
  level: {
    alignItems: 'center',
    backgroundColor: LayoutVariable.color.white,
    display: 'flex',
    height: 35,
    justifyContent: 'center',
    marginRight: 15,
    transform: [{
      rotate: '45deg',
    }],
    width: 35,
  },
  levelText: {
    color: LayoutVariable.color.background,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    textAlign: 'center',
    transform: [{
      rotate: '-45deg',
    }],
  },
  userTitle: {
    color: LayoutVariable.color.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  levelCaption: {
    color: LayoutVariable.color.white,
  },
});
