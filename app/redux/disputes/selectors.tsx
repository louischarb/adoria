import { pathOr } from "ramda";
import { RootState } from "../store";
import { Dispute } from "./types";

export const selectDisputes = (state: RootState): Array<Dispute> => {
  return pathOr([], ["DisputesReducer", "disputes"], state);
};

export const selectDisputeById = (
  state: RootState,
  key: number
): Dispute | undefined => {
  const disputes: Array<Dispute> = pathOr(
    [],
    ["DisputesReducer", "disputes"],
    state
  );
  return disputes.find((e: Dispute) => {
    return pathOr(-1, ["order", "key"], e) === key;
  });
};
