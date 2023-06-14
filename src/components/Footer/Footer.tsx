import { StyleSheet, View } from "react-native";
import FooterItem from "./FooterItem";
import { LayoutVariable } from "../../common/layout";

export default function Footer() {
  return (
    <View style={styles.container}>
      <FooterItem text="ホーム" />
      <FooterItem text="作業記録" />
      <FooterItem text="設定" />
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
