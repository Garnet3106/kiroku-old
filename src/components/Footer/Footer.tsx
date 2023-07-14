import { StyleSheet, View } from "react-native";
import FooterItem, { footerIconSize } from "./FooterItem";
import { LayoutVariable } from "../../common/layout";
import HomeIcon from "./icons/HomeIcon";
import StatisticsIcon from "./icons/StatisticsIcon";
import SettingsIcon from "./icons/SettingsIcon";


export default function Footer() {
  return (
    <View style={styles.container}>
      <FooterItem text="ホーム">
        <HomeIcon size={footerIconSize} color={LayoutVariable.color.white} />
      </FooterItem>
      <FooterItem text="作業記録">
        <StatisticsIcon size={footerIconSize} color={LayoutVariable.color.white} />
      </FooterItem>
      <FooterItem text="設定">
        <SettingsIcon size={footerIconSize - 4} color={LayoutVariable.color.white} />
      </FooterItem>
    </View>
  );
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
