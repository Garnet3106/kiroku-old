import { Platform, StatusBar } from "react-native";

export namespace LayoutVariable {
  export const statusBarHeight = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;
  export const footerHeight = 60;

  export const margin = 12;

  export const borderRadius = 4;

  export const color = {
    white: '#ffffff',
    background: '#179f7e',
    backgroundOpacity: (opacity: number) => `rgba(23, 159, 126, ${opacity})`,
    grayFont: '#999999',
    grayFontOnBackground: '#aecbc4',
  };
}
