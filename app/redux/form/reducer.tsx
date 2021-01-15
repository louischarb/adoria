import {
  ADD_PICTURE,
  RESET_PICTURE,
  ADD_DELIVERY_FORM,
  RESET_DELIVERY_FORM,
  FormState,
  FormActionTypes,
} from "./types";

const initialState: FormState = {
  picture: "",
  deliveryForm: "",
};

export default (state = initialState, action: FormActionTypes): FormState => {
  switch (action.type) {
    case ADD_PICTURE:
      return { ...state, picture: action.picture };
    case RESET_PICTURE:
      return { ...state, picture: "" };
    case ADD_DELIVERY_FORM:
      return { ...state, deliveryForm: action.deliveryForm };
    case RESET_DELIVERY_FORM:
      return { ...state, deliveryForm: "" };
    default:
      return { ...state };
  }
};
