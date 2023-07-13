import Swiper from "react-native-swiper";
import Home from "./Home/Home";
import { LayoutVariable } from "../common/layout";
import { useWindowDimensions } from "react-native";
import Footer from "./Footer/Footer";
import TaskLog from "./Home/TaskLog/TaskLog";
import { useSelector } from "react-redux";
import { RootState, action, store } from "../common/redux/redux";
import TimeCounter from "./TimeCounter/TimeCounter";
import { useEffect } from "react";
import { Storage } from "../common/storage";

export default function App() {
  const windowDimensions = useWindowDimensions();
  const tasks = useSelector((state: RootState) => state.tasks);
  const taskProgress = useSelector((state: RootState) => state.taskProgress);
  const taskInProgress = useSelector((state: RootState) => state.taskInProgress);

  useEffect(() => {
    Storage.getItem(Storage.ItemKey.Tasks, tasks).then((v) => store.dispatch(action.tasks.set(v)));
    Storage.getItem(Storage.ItemKey.TaskProgress, taskProgress).then((v) => store.dispatch(action.taskProgress.set(v)));
    Storage.getItem(Storage.ItemKey.TaskInProgress, taskInProgress).then((v) => store.dispatch(action.taskInProgress.set(v)));
  }, []);

  return (
    <>
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
    <TimeCounter />
    </>
  );
}
