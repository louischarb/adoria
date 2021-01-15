import { pathOr } from "ramda";
import { OrderState, OrderActionTypes, GET_ORDERS } from "./types";
import { orders } from "../../faked/orders";

const initialState: OrderState = {
  orders: orders,
};

export default (state = initialState, action: OrderActionTypes): OrderState => {
  switch (action.type) {
    case GET_ORDERS:
      if (pathOr([], ["orders"], state).length === 0)
        return { ...state, orders: orders };
      else return { ...state };
    default:
      return { ...state };
  }
};
