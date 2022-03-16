import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';


//screens
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Explore from '../screens/Explore/Explore';





const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => (<Feather name='home' size={28} color='red' />) }} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
export default BottomTab;