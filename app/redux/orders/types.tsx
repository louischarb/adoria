import { Order } from "../../types/order";

export { Order };

export interface OrderState {
  orders: Array<Order>;
}

export const GET_ORDERS = "GET_ORDERS";

export interface GetOrdersAction {
  type: typeof GET_ORDERS;
}

export type OrderActionTypes = GetOrdersAction;
