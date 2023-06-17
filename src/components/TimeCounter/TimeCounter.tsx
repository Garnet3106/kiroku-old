import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, useWindowDimensions } from "react-native";
import { View } from "react-native";
import { LayoutVariable } from "../../common/layout";
import Swiper from "react-native-swiper";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, action, store } from "../../common/redux/redux";

export const buttonSize = 60;

export default function TimeCounter() {
  const windowDimensions = useWindowDimensions();
  const swiperRef = useRef<Swiper>();

  const taskInProgress = useSelector((state: RootState) => state.taskInProgress);
  const targetTimeInSeconds = (taskInProgress?.targetTime ?? 0) * 60;
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const timer = useRef<NodeJS.Timer>();
  const enableTimer = useRef(false);

  useEffect(() => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        if (enableTimer.current) {
          setTimeInSeconds((state) => state + 1);
        }
      }, 1000);
    }
  }, []);

  useEffect(() => {
    swiperRef.current?.scrollTo(0);
    setTimeInSeconds(0);
  }, [taskInProgress]);

  const contentStyle = {
    height: windowDimensions.height,
    width: windowDimensions.width,
  };

  return (
    <View style={[
      styles.container,
      {
        top: taskInProgress ? 0 : windowDimensions.height,
      },
    ]}>
      <Swiper
        autoplay={false}
        loop={false}
        showsPagination={false}
        scrollEnabled={false}
        // Ignore ref type error of unknown cause.
        ref={swiperRef as any}
      >
        <View style={[
          styles.content,
          contentStyle
        ]}>
          <Text style={styles.description}>
            準備はできましたか？
          </Text>
          <TouchableHighlight underlayColor="#aaa" style={styles.startButton} onPress={start}>
            <Text style={styles.startButtonText}>
              はじめる
            </Text>
          </TouchableHighlight>
        </View>
        <View style={[
          styles.content,
          contentStyle
        ]}>
          <View style={styles.top}>
            <Text style={styles.title}>
              作業中
            </Text>
            <Text style={styles.titleCaption}>
              {`目標時間 ${getTimeString(targetTimeInSeconds)}`}
            </Text>
          </View>
          <Text style={styles.time}>
            {getTimeString(timeInSeconds, true)}
          </Text>
          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={finish}>
              <View style={[
                styles.button,
                styles.lastButton,
              ]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[
          styles.content,
          contentStyle
        ]}>
          <View style={styles.top}>
            <Text style={styles.title}>
              作業完了
            </Text>
          </View>
          <Text style={styles.time}>
            {getTimeString(timeInSeconds, true)}
          </Text>
          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.5} onPress={close}>
              <View style={[
                styles.button,
                styles.lastButton,
              ]} />
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );

  function getTimeString(timeInSeconds: number, includeSeconds?: boolean): string {
    const hours = Math.floor(timeInSeconds / (60 * 60));
    const hoursInSeconds = hours * 60 * 60;

    const minutes = Math.floor((timeInSeconds - hoursInSeconds) / 60);
    const minutesInSeconds = minutes * 60;

    const seconds = Math.floor(timeInSeconds - hoursInSeconds - minutesInSeconds);

    return includeSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
  }

  function start() {
    enableTimer.current = true;
    swiperRef.current?.scrollTo(1);
  }

  function finish() {
    enableTimer.current = false;
    swiperRef.current?.scrollTo(2);
  }

  function close() {
    store.dispatch(action.taskInProgress.close());
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LayoutVariable.color.white,
    paddingTop: LayoutVariable.statusBarHeight,
    position: 'absolute',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: LayoutVariable.margin,
  },
  top: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  title: {
    backgroundColor: LayoutVariable.color.background,
    color: LayoutVariable.color.white,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  titleCaption: {
    color: LayoutVariable.color.background,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    borderColor: LayoutVariable.color.grayFont,
    borderWidth: 2,
    borderRadius: buttonSize / 2,
    height: buttonSize,
    marginRight: 30,
    width: buttonSize,
  },
  lastButton: {
    marginRight: 0,
  },
  startButton: {
    backgroundColor: LayoutVariable.color.background,
  },
  startButtonText: {
    color: LayoutVariable.color.white,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});