import Swiper from "react-native-swiper";
import Home from "./Home/Home";
import { LayoutVariable } from "../common/layout";
import { useWindowDimensions } from "react-native";
import Footer from "./Footer/Footer";
import TaskLog from "./Home/TaskLog/TaskLog";
import { Provider } from "react-redux";
import { store } from "../common/redux/redux";

export default function App() {
  const windowDimensions = useWindowDimensions();

  return (
    <Provider store={store}>
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
        <TaskLog />
      </Swiper>
      <Footer />
    </Provider>
  );
}
