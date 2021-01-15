import React from "react";
//Components
import { TouchableOpacity, Image } from "react-native";
import { Header } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
//Hooks
import { useNavigation } from "@react-navigation/native";
//Constants
import _colors from "../../constants/colors";

export default ({ back }: { back?: boolean }) => {
  const navigation = useNavigation();

  const headerCenterComponent = () => {
    return <Image source={require("../../assets/logo.png")} />;
  };

  const headerLeftComponent = () => {
    return (
      <TouchableOpacity
        onPress={(): void => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={24} color={_colors.black} />
      </TouchableOpacity>
    );
  };

  return (
    <Header
      leftComponent={back ? headerLeftComponent : null}
      centerComponent={headerCenterComponent}
      backgroundColor={_colors.lightGrey}
    />
  );
};
