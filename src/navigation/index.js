import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, RepoScreen } from "../screens";

const { Screen, Navigator } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"Home"}
        screenOptions={{
          header: () => null,
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Screen name={"Repo"} component={RepoScreen} />
        <Screen name={"Home"} component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;