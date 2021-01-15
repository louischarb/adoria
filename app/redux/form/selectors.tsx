import { pathOr } from "ramda";
import { RootState } from "../store";

export const selectPicture = (state: RootState): string | null =>
  pathOr(null, ["FormReducer", "picture"], state);

export const selectDeliveryForm = (state: RootState): string | null =>
  pathOr(null, ["FormReducer", "deliveryForm"], state);
