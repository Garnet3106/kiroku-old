import { StyleSheet, Text, View } from "react-native";
import { LayoutVariable } from "../../common/layout";

export type FooterItemProps = {
  text: string,
  children?: JSX.Element | JSX.Element[],
};

export const footerIconSize = LayoutVariable.footerHeight - 25;

export default function FooterItem(props: FooterItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {props.children}
      </View>
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
    alignItems: 'center',
    display: 'flex',
    height: footerIconSize,
    justifyContent: 'center',
    width: footerIconSize,
  },
  text: {
    color: LayoutVariable.color.white,
    fontSize: 12,
    marginTop: 2,
  },
});
