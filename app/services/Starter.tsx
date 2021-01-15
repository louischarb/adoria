//Hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//Redux
import { getOrders } from "../redux/orders/actions";

export default ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return children;
};
