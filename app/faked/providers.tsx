import { Provider } from "../types/provider";

export { Provider };

export type ProviderList = Array<Provider>;

let index = 0;

export const providers: ProviderList = [
  {
    key: index++,
    label: "Metro",
  },
  {
    key: index++,
    label: "PromoCash",
  },
  {
    key: index++,
    label: "Brake",
  },
  {
    key: index++,
    label: "Felix Potin",
  },
];
