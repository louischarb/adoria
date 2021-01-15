import React from "react";
//Components
import { AntDesign } from "@expo/vector-icons";
//Constants
import _colors from "../../constants/colors";
//Types
import { inputType, valueType } from "./types";
import { Dispute } from "../../types/dispute";

export const renderIcon = (
  icon: string,
  input: inputType,
  value: valueType
): object => {
  switch (input) {
    case "text":
      if (!value)
        return <AntDesign name={icon} size={24} color={_colors.black} />;
      else if (value.length < 6)
        return <AntDesign name="close" size={24} color={_colors.red} />;
      else return <AntDesign name="check" size={24} color={_colors.green} />;
    case "date":
      return <AntDesign name={icon} size={24} color={_colors.black} />;
    case "camera":
      if (value)
        return <AntDesign name="check" size={24} color={_colors.green} />;
      return <AntDesign name={icon} size={24} color={_colors.black} />;
    default:
      return <AntDesign name={icon} size={24} color={_colors.black} />;
  }
};

export const checkForm = ({
  picture,
  name,
  description,
  date,
  provider,
  order,
  deliveryForm,
}: Dispute): boolean => {
  if (
    picture &&
    picture.length > 0 &&
    name &&
    name.length > 5 &&
    description &&
    description.length > 5 &&
    date &&
    date.toString().length > 0 &&
    provider &&
    provider.length > 0 &&
    order &&
    deliveryForm &&
    deliveryForm.length > 0
  )
    return true;
  return false;
};
