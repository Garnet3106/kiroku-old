import Swiper from "react-native-swiper";
import Home from "./Home/Home";
import { LayoutVariable } from "../common/layout";
import { useWindowDimensions } from "react-native";

export default function App() {
  const windowDimensions = useWindowDimensions();

  return (
    <Swiper
      autoplay={false}
      loop={false}
      showsPagination={false}
      style={{
        height: windowDimensions.height - LayoutVariable.footerHeight,
      }}
      onMomentumScrollEnd={() => {}}
    >
      <Home />
    </Swiper>
  );
}
