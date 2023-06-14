import { StyleSheet, Text, View } from "react-native";
import { LayoutVariable } from "../../common/layout";
import { ProgressChart as ChartKitProgressChart } from "react-native-chart-kit";

export type ProgressChartProps = {
  ratio: number,
  size: number,
  radius: number,
};

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => LayoutVariable.color.backgroundOpacity(opacity * 2),
};

export default function ProgressChart(props: ProgressChartProps) {
  const percentage = Math.floor(props.ratio * 100);

  return (
    <View style={[
      styles.chartWrapper,
      {
        height: props.size,
        width: props.size,
      },
    ]}>
      <ChartKitProgressChart
        style={styles.chart}
        data={[props.ratio]}
        width={props.size}
        height={props.size}
        strokeWidth={16}
        radius={props.radius}
        chartConfig={chartConfig}
        hideLegend={true}
      />
      <Text style={styles.chartText}>
        {`${percentage}%`}
      </Text>
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
    justifyContent: 'center',
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
