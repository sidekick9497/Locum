import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../components/screens/HomeScreen'
import ProfileScreen from '../components/screens/ProfileScreen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from '../components/screens/ChatScreen'
import HistoryScreen from '../components/screens/HistoryScreen'
import ChatViewScreen from '../components/screens/ChatViewScreen'
const Stack = createStackNavigator();

function HomeStackNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                children={() => <HomeScreen/>}
            />

            <Stack.Screen
                name="profile"
                component={() => <ProfileScreen />} />
        </Stack.Navigator>
    )
}

function ChatScreenStackNavigator(props) {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ChatScreen"
                children={() => <ChatScreen/>}
            />

            <Stack.Screen
                name="ChatViewScreen"
                component={ChatViewScreen} />
        </Stack.Navigator>
    )
    
}

const Tab = createBottomTabNavigator();

function BaseTabs(props) {

    return (
        <Tab.Navigator>

            <Tab.Screen name="home" children={() => <HomeScreen searchText = {props.state.searchText} searchTextEvent = {props.state.homeSearchText} />}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color , size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen name="chat" component={ChatScreenStackNavigator}
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
                
            <Tab.Screen name="profile" component={() => <ProfileScreen profileDetails = {props.state.profileDetails}/>}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />

        </Tab.Navigator>
    )
}
export default BaseTabs;