import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {HomeScreen, ChatScreen} from '../screens';
export type MainStackParamList = {
  HomeScreen: undefined;
  ChatScreen: undefined;
};

export type MainTabParamList = {
  HomeScreen: undefined;
  ChatScreen: undefined;
};

// const MainStack = createNativeStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();
export default function Screens() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          
          tabBarInactiveTintColor: '#6c757d',
          tabBarActiveTintColor: '#212529',
          headerShown: false,
        }}

        // initialRouteName="HomeScreen"

        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
