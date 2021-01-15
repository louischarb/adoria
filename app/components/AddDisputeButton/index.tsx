import React from "react";
//Components
import { Button } from "react-native-elements";
import { buttonStyle, buttonTitleStyle, containerStyle } from "./styles";
//Hooks
import { useNavigation } from "@react-navigation/native";
//Constants
import _colors from "../../constants/colors";
import _screens from "../../constants/screens";

export default () => {
  const navigation = useNavigation();
  return (
    <Button
      buttonStyle={buttonStyle}
      containerStyle={containerStyle}
      title="Déclarer un litige"
      titleStyle={buttonTitleStyle}
      onPress={() => navigation.navigate(_screens.ADD_DISPUTE_FORM)}
    />
  );
};
