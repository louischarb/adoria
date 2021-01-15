import { pathOr } from "ramda";
import { RootState } from "../store";
import { Order } from "../../types/order";

export const selectOrders = (state: RootState): Array<Order> => {
  return pathOr([], ["OrdersReducer", "orders"], state);
};
