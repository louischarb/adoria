import { ADD_DISPUTE, AddDisputeAction, Dispute } from "./types";

export const addDispute = (dispute: Dispute): AddDisputeAction => ({
  type: ADD_DISPUTE,
  dispute,
});
