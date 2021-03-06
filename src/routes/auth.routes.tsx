import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{ 
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
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
            <Screen
               name="AppointmentDetailsScreen"
               component={AppointmentDetails} 
            />
        </Navigator>
    )
}