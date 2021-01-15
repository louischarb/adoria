import { Order } from "../types/order";

export type OrderList = Array<Order>;

export const orders: OrderList = [
  {
    key: 1,
    createAt: 1610478491690,
    label: "Pains Burger",
    quantity: 150,
  },
  {
    key: 2,
    createAt: 1610478491690,
    label: "Steaks hachés",
    quantity: 200,
  },
  {
    key: 3,
    createAt: 1610478491690,
    label: "Salades",
    quantity: 100,
  },
];
