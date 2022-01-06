import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';

import createStyles from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
const Tab = createBottomTabNavigator();
const HomeScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
