import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{ 
                cardStyle: {
                    backgroundColor: 'transparent'
                }
             }}
             initialRouteName="SignInScreen"
        >
             <Screen
               name="SignInScreen"
               component={SignIn} 
            />
            <Screen
               name="HomeScreen"
               component={Home} 
            />
        </Navigator>
    )
}