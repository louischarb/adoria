import React from "react";
//Components
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import DisputeScreen from "../screens/DisputeScreen";
import DisputesListScreen from "../screens/DisputesListScreen";
import AddDisputeForm from "../screens/AddDisputeForm";
//Hoc
import withHeader from "../hoc/withHeader";
import withHeaderBackButton from "../hoc/withHeaderBackButton";
//Constants
import _screens from "../constants/screens";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={_screens.DISPUTES_LIST}
        component={withHeader(DisputesListScreen)}
      />
      <Stack.Screen
        name={_screens.ADD_DISPUTE_FORM}
        component={withHeaderBackButton(AddDisputeForm)}
      />
      <Stack.Screen
        name={_screens.DISPUTE}
        component={withHeaderBackButton(DisputeScreen)}
      />
    </Stack.Navigator>
  );
};
