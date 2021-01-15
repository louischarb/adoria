import { combineReducers, createStore } from "redux";
import DisputesReducer from "./disputes/reducer";
import OrdersReducer from "./orders/reducers";
import FormReducer from "./form/reducer";

const rootReducer = combineReducers({
  DisputesReducer,
  OrdersReducer,
  FormReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
