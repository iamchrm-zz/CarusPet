import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ChatScreen: undefined;
};

export default function Navigations() {
  const RockStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <RockStack.Navigator initialRouteName="HomeScreen">
        <RockStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RockStack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false, headerBackTitleVisible: false}}
        />
      </RockStack.Navigator>
    </NavigationContainer>
  );
}
