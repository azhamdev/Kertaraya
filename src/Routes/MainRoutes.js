import React from "react";
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Explore from "../screens/Explore/Explore";
import Register from "../screens/Register/Register";
import BottomTab from "./BottomTab";


const Stack = createStackNavigator();

export default function MainRoutes() {
    return (
        <Stack.Navigator initialRouteName="Register">
            <Stack.Screen name="Main" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
    );
}


// screen awal dari register -> Login -> Home -> Explore -> Profile -> register