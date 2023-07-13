import { Provider } from "react-redux";
import App from "./src/components/App";
import { store } from "./src/common/redux/redux";

export default function AppRoot() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
