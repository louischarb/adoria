import React from "react";
//Components
import { TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
//Hooks
import { useNavigation } from "@react-navigation/native";
//Constants
import _screens from "../../constants/screens";
//Types
import { Dispute } from "../../types/dispute";

export default ({ dispute }: { dispute: Dispute }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={(): void => {
        navigation.navigate(_screens.DISPUTE, { dispute });
      }}
    >
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{dispute.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
};
