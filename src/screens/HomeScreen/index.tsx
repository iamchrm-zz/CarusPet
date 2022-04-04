import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import createStyles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';

export const HomeScreen = () => {
  return (
    <>
      <View>
        <Header />
        <Stories />
        <ScrollView>
          <Post />
        </ScrollView>
      </View>
    </>
  );
};
