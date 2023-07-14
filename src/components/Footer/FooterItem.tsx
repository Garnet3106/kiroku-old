import { ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { LayoutVariable } from "../../common/layout";

export type FooterItemProps = {
  text: string,
  textColor: ColorValue,
  onPress?: (event: GestureResponderEvent) => void,
  children?: JSX.Element | JSX.Element[],
};

export const footerIconSize = LayoutVariable.footerHeight - 25;

export default function FooterItem(props: FooterItemProps) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.icon}>
          {props.children}
        </View>
        <Text style={[
          styles.text,
          {
            color: props.textColor,
          },
        ]}>
          {props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
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
    fontSize: 12,
    marginTop: 2,
  },
});
