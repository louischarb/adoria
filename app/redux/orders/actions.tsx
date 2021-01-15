import { GET_ORDERS, GetOrdersAction } from "./types";

export const getOrders = (): GetOrdersAction => ({
  type: GET_ORDERS,
});
