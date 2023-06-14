import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LayoutVariable } from "../../../common/layout";
import ProgressChart from "../../common/ProgressChart";
import SelectionBar from "../../common/SelectionBar";

export default function TaskLog() {
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
          {`${10}個中${0}個のタスクが完了`}
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
              ratio={0}
              wrapperSize={LayoutVariable.progressChart.wrapperSize}
              radius={LayoutVariable.progressChart.radius}
            />
          </View>
          <View style={styles.chartWrapper}>
            <Text style={styles.chartTitle}>
              今週
            </Text>
            <ProgressChart
              ratio={0}
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
