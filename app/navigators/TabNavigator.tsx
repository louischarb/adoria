import React from "react";
//Components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
//Screens
import HomeScreen from "../screens/HomeScreen";
import DisputeNavigator from "../navigators/DisputeNavigator";
//Hoc
import withHeader from "../hoc/withHeader";
//Constants
import _screens from "../constants/screens";
import _routes from "../constants/screens";
import _colors from "../constants/colors";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          switch (route.name) {
            case _routes.HOME:
              iconName = "home";
              break;
            case _routes.DISPUTES_LIST:
              iconName = "warning";
              break;
            default:
              iconName = "exclamation";
              break;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: _colors.primary,
        inactiveTintColor: _colors.grey,
        showLabel: false,
      }}
    >
      <Tab.Screen name={_screens.HOME} component={withHeader(HomeScreen)} />
      <Tab.Screen name={_screens.DISPUTES_LIST} component={DisputeNavigator} />
    </Tab.Navigator>
  );
};
