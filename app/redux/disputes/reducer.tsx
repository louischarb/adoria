import {
  ADD_DISPUTE,
  DisputeActionTypes,
  Dispute,
  DisputesState,
} from "./types";

const initialState: DisputesState = {
  disputes: [],
};

export default (
  state = initialState,
  action: DisputeActionTypes
): DisputesState => {
  switch (action.type) {
    case ADD_DISPUTE:
      const newDispute: Array<Dispute> = [...state.disputes];
      newDispute.push(action.dispute);
      return { ...state, disputes: newDispute };
    default:
      return { ...state };
  }
};
