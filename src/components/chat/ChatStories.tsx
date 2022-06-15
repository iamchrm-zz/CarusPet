import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/Navigations';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {users} from '../../data/data';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../assets/images/constants/colors';

const ChatStories = () => {
  const [searching, setSearching] = useState(false);
  const nagivation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map(({id, image, name}) => (
          <View key={id} style={{alignItems: 'center'}}>
            <Image source={{uri: image}} style={styles.story} />
            <Text style={{color: Colors.BLACK}}>
              {name.length > 11
                ? name.slice(0, 10).toLocaleLowerCase() + '...'
                : name.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '35%',
    paddingTop: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#fff',

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    // elevation: 24,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});
export default ChatStories;
