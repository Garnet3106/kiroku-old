import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Task, TaskDate, TaskProgress } from "../../../common/task";
import { LayoutVariable } from "../../../common/layout";
import { useSelector } from "react-redux";
import { RootState } from "../../../common/redux/redux";

export type TaskItemProps = {
  task: Task,
};

const progressBarHeight = 30;

export default function TaskItem(props: TaskItemProps) {
  const windowDimensions = useWindowDimensions();

  const tasks = useSelector((state: RootState) => state.tasks);
  const todayDate = TaskDate.getToday();
  const taskProgress = useSelector((state: RootState) => state.taskProgress);
  const todayProgress = taskProgress.filter(({ taskId, date }) => taskId === props.task.id && TaskDate.isEqual(date, todayDate));
  const todayProgressStats = TaskProgress.getProgressStats(tasks, todayProgress, props.task.targetTime);
  const todayProgressPercentage = Math.floor(todayProgressStats.ratio * 100);

  return (
    <View style={[
      styles.container,
      {
        width: windowDimensions.width - (LayoutVariable.margin * 2),
      },
    ]}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View style={styles.icon} />
          <Text style={styles.name}>
            {props.task.name}
          </Text>
        </View>
        <Text style={styles.time}>
          {`${todayProgressStats.timeSum ?? 0}分/${props.task.targetTime}分`}
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View style={{
          backgroundColor: LayoutVariable.color.grayFontOnBackground,
          borderRadius: LayoutVariable.borderRadius,
          height: '100%',
          width: `${todayProgressPercentage <= 100 ? todayProgressPercentage : 100}%`,
        }} />
      </View>
      <Text style={styles.caption}>
        作業をはじめる
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LayoutVariable.color.background,
    borderRadius: LayoutVariable.borderRadius,
    marginTop: LayoutVariable.margin,
    padding: LayoutVariable.margin,
  },
  top: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeft: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: LayoutVariable.color.white,
    borderRadius: 100,
    height: 25,
    marginRight: LayoutVariable.margin / 2,
    width: 25,
  },
  name: {
    color: LayoutVariable.color.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    color: LayoutVariable.color.grayFontOnBackground,
  },
  progressBar: {
    backgroundColor: LayoutVariable.color.white,
    borderRadius: LayoutVariable.borderRadius,
    height: progressBarHeight,
    marginVertical: LayoutVariable.margin / 2,
    width: '100%',
  },
  caption: {
    color: LayoutVariable.color.white,
    fontSize: 12,
  },
});
