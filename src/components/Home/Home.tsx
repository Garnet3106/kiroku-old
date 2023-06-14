import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LayoutVariable } from "../../common/layout";
import TaskList from "./TaskList/TaskList";
import { ProgressChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => LayoutVariable.color.backgroundOpacity(opacity * 2),
};

const chartSize = 120;

export default function Home() {
  const windowDimensions = useWindowDimensions();
  const height = windowDimensions.width * 0.5;
  const todayProgressRatio = 0;

  return (
    <View style={[
      styles.container,
      {
        height: windowDimensions.height - LayoutVariable.footerHeight,
      },
    ]}>
      <View style={[
        styles.header,
        {
          height: LayoutVariable.statusBarHeight + height,
        },
      ]}>
        <View style={styles.chartWrapper}>
          <ProgressChart
            style={styles.chart}
            data={[todayProgressRatio]}
            width={chartSize}
            height={chartSize}
            strokeWidth={16}
            radius={40}
            chartConfig={chartConfig}
            hideLegend={true}
          />
          <Text style={styles.chartText}>
            {`${todayProgressRatio}%`}
          </Text>
        </View>
      </View>
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
  chartWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: chartSize,
    justifyContent: 'center',
    width: chartSize,
  },
  chart: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  chartText: {
    color: '#888',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
