import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Task } from "../../../common/task";
import { LayoutVariable } from "../../../common/layout";

export type TaskItemProps = {
  task: Task,
};

const progressBarHeight = 30;

export default function TaskItem(props: TaskItemProps) {
  const windowDimensions = useWindowDimensions();
  const progressRatio = props.task.targetTime === 0 ? 1 : (props.task.currentTime / props.task.targetTime);
  const progressPercentage = Math.floor(progressRatio * 100);

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
          {`${props.task.currentTime}分/${props.task.targetTime}分`}
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View style={{
          backgroundColor: LayoutVariable.color.grayFontOnBackground,
          borderRadius: LayoutVariable.borderRadius,
          height: '100%',
          width: `${progressPercentage}%`,
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
