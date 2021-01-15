import { Order } from "./order";

export interface Dispute {
  picture: string | null;
  name: string | null;
  description: string | null;
  date: string;
  provider: string;
  order: Order;
  deliveryForm: string | null;
}
