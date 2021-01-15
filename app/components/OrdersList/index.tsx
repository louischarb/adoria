import React from "react";
//Components
import { Card } from "react-native-elements";
import { OrderListEmptyText } from "./styles";
import OrderItem from "../OrderItem";
//Hooks
import { useSelector } from "react-redux";
//Redux
import { selectOrders } from "../../redux/orders/selectors";
//Types
import { Order } from "../../types/order";

export default () => {
  const orders: Array<Order> = useSelector(selectOrders);
  return (
    <Card>
      <Card.Title>Mes commandes</Card.Title>
      {orders.length !== 0 ? (
        <>
          {orders.map((order: Order, i: number): object => {
            return <OrderItem key={i} order={order} />;
          })}
        </>
      ) : (
        <OrderListEmptyText>Vous n'avez pas de commandes.</OrderListEmptyText>
      )}
    </Card>
  );
};
