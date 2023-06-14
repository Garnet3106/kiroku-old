import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LayoutVariable } from "../../common/layout";
import TaskList from "./TaskList/TaskList";
import ProgressChart from "../common/ProgressChart";

const progressChartSize = 120;

export default function Home() {
  const windowDimensions = useWindowDimensions();
  const height = windowDimensions.width * 0.5;
  const todayProgressRatio = 0;

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
        <ProgressChart ratio={todayProgressRatio} size={progressChartSize} radius={40} />
      </View>
      <ScrollView style={{
        height: bodyHeight,
      }}>
        <TaskList tasks={[
          {
            name: '基本情報の勉強',
            targetTime: 60,
            currentTime: 10,
          },
          {
            name: '瞑想',
            targetTime: 10,
            currentTime: 0,
          },
        ]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: LayoutVariable.statusBarHeight,
  },
});
