import React from "react";
//Components
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import TabNavigator from "../navigators/TabNavigator";
import CameraScreen from "../screens/CameraScreen";
//Constants
import _screens from "../constants/screens";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={_screens.HOME} component={TabNavigator} />
        <Stack.Screen name={_screens.CAMERA} component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
