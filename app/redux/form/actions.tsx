import {
  ADD_PICTURE,
  ADD_DELIVERY_FORM,
  RESET_PICTURE,
  RESET_DELIVERY_FORM,
  AddPictureAction,
  AddDeliveryFormAction,
  ResetPictureAction,
  ResetDeliveryFormAction,
} from "./types";

export const addPicture = (picture: string): AddPictureAction => ({
  type: ADD_PICTURE,
  picture,
});

export const resetPicture = (): ResetPictureAction => ({
  type: RESET_PICTURE,
});

export const addDeliveryForm = (
  deliveryForm: string
): AddDeliveryFormAction => ({
  type: ADD_DELIVERY_FORM,
  deliveryForm,
});

export const resetDeliveryForm = (): ResetDeliveryFormAction => ({
  type: RESET_DELIVERY_FORM,
});
