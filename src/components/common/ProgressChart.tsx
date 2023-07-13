import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { LayoutVariable } from "../../common/layout";
import { ProgressChart as ChartKitProgressChart } from "react-native-chart-kit";

export type ProgressChartProps = {
  ratio: number,
  wrapperSize: number,
  radius: number,
  style?: StyleProp<ViewStyle>,
};

export default function ProgressChart(props: ProgressChartProps) {
  const percentage = Math.floor(props.ratio * 100);

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 2})`,
  };

  return (
    <View style={[
      props.style,
      styles.container,
      {
        height: props.wrapperSize,
        width: props.wrapperSize,
      },
    ]}>
      <ChartKitProgressChart
        style={styles.chart}
        data={[props.ratio <= 1 ? props.ratio : 1]}
        width={props.wrapperSize}
        height={props.wrapperSize}
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
  container: {
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
    color: LayoutVariable.color.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
