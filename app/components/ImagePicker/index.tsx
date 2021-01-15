import React, { useEffect } from "react";
//Components
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
//Types

export default ({
  children,
  onPress,
}: {
  children: object;
  onPress: () => void;
}) => {
  useEffect(() => {
    (async () => {
      const {
        status,
      }: {
        status: ImagePicker.PermissionStatus;
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};
