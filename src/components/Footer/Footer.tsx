import { ColorValue, StyleSheet, View } from "react-native";
import FooterItem, { footerIconSize } from "./FooterItem";
import { LayoutVariable } from "../../common/layout";
import HomeIcon from "./icons/HomeIcon";
import StatisticsIcon from "./icons/StatisticsIcon";
import SettingsIcon from "./icons/SettingsIcon";
import { RootState, action, store } from "../../common/redux/redux";
import { useSelector } from "react-redux";

export default function Footer() {
  const topSwiperIndex = useSelector((state: RootState) => state.topSwiperIndex);

  return (
    <View style={styles.container}>
      <FooterItem text="ホーム" textColor={getColor(0)} onPress={onPressItem(0)}>
        <HomeIcon size={footerIconSize} color={getColor(0)} />
      </FooterItem>
      <FooterItem text="作業記録" textColor={getColor(1)} onPress={onPressItem(1)}>
        <StatisticsIcon size={footerIconSize} color={getColor(1)} />
      </FooterItem>
      <FooterItem text="設定" textColor={getColor(2)} onPress={onPressItem(2)}>
        <SettingsIcon size={footerIconSize - 4} color={getColor(2)} />
      </FooterItem>
    </View>
  );

  function getColor(index: number): ColorValue {
    return topSwiperIndex === index ? LayoutVariable.color.white : LayoutVariable.color.grayFontOnBackground;
  }

  function onPressItem(index: number): () => void {
    return () => store.dispatch(action.topSwiperIndex.swipeTo(index));
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: LayoutVariable.color.background,
    display: 'flex',
    height: LayoutVariable.footerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
});
