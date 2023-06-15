import Swiper from "react-native-swiper";
import Home from "./Home/Home";
import { LayoutVariable } from "../common/layout";
import { useWindowDimensions } from "react-native";
import Footer from "./Footer/Footer";
import TaskLog from "./Home/TaskLog/TaskLog";
import { Provider } from "react-redux";
import { action, store } from "../common/redux/slices";
import { useEffect } from "react";

export default function App() {
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    store.dispatch(action.tasks.set([
      {
        name: '基本情報の勉強',
        targetTime: 60,
        currentTime: 10,
      },
      {
        name: '瞑想',
        targetTime: 10,
        currentTime: 0,
      },
    ]))
  }, []);

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
