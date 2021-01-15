import React from "react";
import { ListItem } from "react-native-elements";
import { renderIcon } from "./func";
import { InputWrapperPropsType } from "./types";

export default ({
  children,
  title,
  icon,
  value,
  input,
  onPress,
}: InputWrapperPropsType) => {
  return (
    <ListItem bottomDivider onPress={onPress}>
      {renderIcon(icon, input, value)}
      <ListItem.Title>{title}</ListItem.Title>
      {children}
    </ListItem>
  );
};
