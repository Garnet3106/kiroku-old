import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { LayoutVariable } from "../../common/layout";

export type SelectionBarProps = {
  items: string[],
  selected: number,
  width: number,
  style?: StyleProp<ViewStyle>,
};

export default function SelectionBar(props: SelectionBarProps) {
  const itemWidth = Math.floor(props.width / props.items.length);

  const items = props.items.map((item, index) => (
    <View
      style={getItemStyles(index)}
      key={Math.random()}
    >
      <Text style={[
        styles.itemText,
        index === props.selected && {
          color: LayoutVariable.color.white,
        },
      ]}>
        {item}
      </Text>
    </View>
  ));

  return (
    <View style={[
      props.style,
      styles.container,
    ]}>
      {items}
    </View>
  );

  function getItemStyles(index: number): StyleProp<ViewStyle> {
    return [
      styles.item,
      {
        width: itemWidth,
      },
      index === 0 && props.selected === 0 && {
        borderTopLeftRadius: LayoutVariable.borderRadius,
        borderBottomLeftRadius: LayoutVariable.borderRadius,
      },
      index === props.items.length - 1 && props.selected === props.items.length - 1 && {
        borderTopRightRadius: LayoutVariable.borderRadius,
        borderBottomRightRadius: LayoutVariable.borderRadius,
      },
      index !== props.items.length - 1 && {
        borderRightColor: LayoutVariable.color.background,
        borderRightWidth: 1,
      },
      index === props.selected && {
        backgroundColor: LayoutVariable.color.background,
      },
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: LayoutVariable.color.background,
    borderRadius: LayoutVariable.borderRadius,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    paddingVertical: 5,
  },
  itemText: {
    color: LayoutVariable.color.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
