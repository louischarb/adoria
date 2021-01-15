import React from "react";
//Components
import { ListItem } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
//Hooks
import { useSelector } from "react-redux";
//Redux
import { selectDisputeById } from "../../redux/disputes/selectors";
//Types
import { Order } from "../../types/order";
import { RootState } from "../../redux/store";
//Contants
import _colors from "../../constants/colors";

export default ({ order }: { order: Order }) => {
  const dispute = useSelector((state: RootState) =>
    selectDisputeById(state, order.key)
  );
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{order.label}</ListItem.Title>
      </ListItem.Content>
      {dispute && (
        <AntDesign name="warning" size={18} color={_colors.secondary} />
      )}
    </ListItem>
  );
};
