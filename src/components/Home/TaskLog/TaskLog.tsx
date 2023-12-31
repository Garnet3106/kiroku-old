import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LayoutVariable } from "../../../common/layout";
import ProgressChart from "../../common/ProgressChart";
import SelectionBar from "../../common/SelectionBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../common/redux/redux";
import { Task, TaskProgress } from "../../../common/task";

export default function TaskLog() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const taskProgress = useSelector((state: RootState) => state.taskProgress);
  const todayProgress = TaskProgress.getTodayProgress(taskProgress);
  const todayProgressStats = TaskProgress.getProgressStats(tasks, todayProgress, Task.getTargetTimeSum(tasks));
  const weeklyProgress = TaskProgress.getWeeklyProgress(taskProgress);
  // fix targetTime
  const weeklyProgressStats = TaskProgress.getProgressStats(tasks, weeklyProgress, Task.getTargetTimeSum(tasks) * 7);

  const numberOfTodayTasks = tasks.filter((v) => !v.archived).length;
  const numberOfTodayCompletedTasks = Task.getCompletedTasks(tasks, todayProgress).length;

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
        <Text style={styles.description}>
          {`${numberOfTodayTasks}個中${numberOfTodayCompletedTasks}個のタスクが完了`}
        </Text>
        <View style={styles.charts}>
          <View style={[
            styles.chartWrapper,
            {
              marginRight: 15,
            },
          ]}>
            <Text style={styles.chartTitle}>
              今週
            </Text>
            <ProgressChart
              ratio={weeklyProgressStats.ratio}
              wrapperSize={LayoutVariable.progressChart.wrapperSize}
              radius={LayoutVariable.progressChart.radius}
            />
          </View>
          <View style={styles.chartWrapper}>
            <Text style={styles.chartTitle}>
              今日
            </Text>
            <ProgressChart
              ratio={todayProgressStats.ratio}
              wrapperSize={LayoutVariable.progressChart.wrapperSize}
              radius={LayoutVariable.progressChart.radius}
              style={{
                marginRight: 10,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{
        alignItems: 'center',
        display: 'flex',
        height: bodyHeight,
      }}>
        <SelectionBar
          items={['日別スケジュール', '時間推移']}
          selected={0}
          width={windowDimensions.width - (LayoutVariable.margin * 2)}
          style={{
            marginVertical: LayoutVariable.margin * 2,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    alignItems: 'center',
    backgroundColor: LayoutVariable.color.background,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: LayoutVariable.statusBarHeight,
  },
  description: {
    color: LayoutVariable.color.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  charts: {
    display: 'flex',
    flexDirection: 'row',
  },
  chartWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  chartTitle: {
    backgroundColor: LayoutVariable.color.white,
    color: LayoutVariable.color.background,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});
