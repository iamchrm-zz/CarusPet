import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';

export default function HomeScreen() {
  const navigation = useNavigation();
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
}
