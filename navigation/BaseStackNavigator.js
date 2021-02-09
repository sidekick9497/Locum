import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ChatScreen from '../screens/ChatScreen'
import HistoryScreen from '../screens/HistoryScreen'
const Stack = createStackNavigator();

function HomeStackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component = {HomeScreen}
            />

        <Stack.Screen
        name="profile"
        component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function BaseTabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStackNavigator}/>
            <Tab.Screen name="chat" component={ChatScreen}/>
            <Tab.Screen name="history" component={HistoryScreen}/>
            <Tab.Screen name="profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}
export default BaseTabs