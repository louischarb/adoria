import React from "react";
//Components
import { Provider } from "react-redux";
import AppNavigator from "./app/navigators/AppNavigator";
import Starter from "./app/services/Starter";
//Redux
import { store } from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Starter>
        <AppNavigator />
      </Starter>
    </Provider>
  );
}
