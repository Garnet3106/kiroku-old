import { Platform, StatusBar } from "react-native";

export namespace LayoutVariable {
  export const animationDuration = 250;

  export const statusBarHeight = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;
  export const footerHeight = 60;

  export const margin = 12;

  export const borderRadius = 4;

  export const color = {
    white: '#ffffff',
    background: '#179f7e',
    grayFont: '#999999',
    grayFontOnBackground: '#aecbc4',
  };

  export const progressChart = {
    wrapperSize: 100,
    radius: 40,
  };
}
