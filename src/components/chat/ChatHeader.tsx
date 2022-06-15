import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconIonic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigations/Navigations';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ChatHeader = () => {
  const [searching, setSearching] = useState(false);
  const nagivation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconLeft}>
        <IconIonic
          name="ios-chevron-back-outline"
          size={30}
          onPress={() => nagivation.navigate('HomeScreen')}
        />
        <Text>Messages</Text>
      </View>
      <View style={styles.iconRight}>
        <IconIonic name="search-outline" size={30} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
  iconLeft: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconRight: {},
});
export default ChatHeader;
