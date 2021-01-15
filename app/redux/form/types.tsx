export interface FormState {
  picture: string;
  deliveryForm: string;
}

export const ADD_PICTURE: string = "ADD_PICTURE";
export const RESET_PICTURE: string = "RESET_PICTURE";
export const ADD_DELIVERY_FORM: string = "ADD_DELIVERY_FORM";
export const RESET_DELIVERY_FORM: string = "RESET_DELIVERY_FORM";

export interface AddPictureAction {
  type: typeof ADD_PICTURE;
  picture: string;
}

export interface ResetPictureAction {
  type: typeof RESET_PICTURE;
}

export interface AddDeliveryFormAction {
  type: typeof ADD_DELIVERY_FORM;
  deliveryForm: string;
}

export interface ResetDeliveryFormAction {
  type: typeof RESET_DELIVERY_FORM;
}

export type FormActionTypes = AddPictureAction &
  ResetPictureAction &
  AddDeliveryFormAction &
  ResetDeliveryFormAction;
