import { StyleSheet, Text, View } from "react-native";
import { LayoutVariable } from "../../common/layout";

export type FooterItemProps = {
  text: string,
};

const iconSize = LayoutVariable.footerHeight - 25;

export default function FooterItem(props: FooterItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  icon: {
    backgroundColor: LayoutVariable.color.white,
    height: iconSize,
    width: iconSize,
  },
  text: {
    color: LayoutVariable.color.white,
    fontSize: 12,
  },
});
