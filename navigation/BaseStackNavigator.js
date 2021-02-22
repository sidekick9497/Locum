import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from '../screens/ChatScreen'
import HistoryScreen from '../screens/HistoryScreen'
const Stack = createStackNavigator();

function HomeStackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />

            <Stack.Screen
                name="profile"
                component={ProfileScreen} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function BaseTabs(props) {
    return (
        <Tab.Navigator>

            <Tab.Screen name="home" component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen name="chat" component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen name="history" component={HistoryScreen}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="history" color={color} size={size} />
                    ),
                }} />
                
            <Tab.Screen name="profile" component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />

        </Tab.Navigator>
    )
}
export default BaseTabs