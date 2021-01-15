import { Dispute } from "../../types/dispute";

export { Dispute };

export interface DisputesState {
  disputes: Array<Dispute>;
}

export const ADD_DISPUTE: string = "ADD_DISPUTE";

export interface AddDisputeAction {
  type: typeof ADD_DISPUTE;
  dispute: Dispute;
}

export type DisputeActionTypes = AddDisputeAction;
