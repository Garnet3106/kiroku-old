import { PieChart as ChartKitPieChart } from "react-native-chart-kit";

export type PieChartData = {
  color: string,
  value: number,
};

export type PieChartProps = {
  data: PieChartData[],
  size: number,
};

export default function PieChart(props: PieChartProps) {
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 2})`,
  };

  return (
    <ChartKitPieChart
      data={props.data}
      width={props.size}
      height={props.size}
      chartConfig={chartConfig}
      accessor="value"
      backgroundColor="transparent"
      paddingLeft="0"
      center={[props.size / 4, 0]}
      hasLegend={false}
    />
  );
}
