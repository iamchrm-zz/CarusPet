import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../assets/images/constants/colors';
import {users} from '../../data/data';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
const Stories = () => {
  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#081C15', '#1B4332']}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {users.map(({id, image, name}) => (
            <View key={id} style={{alignItems: 'center'}}>
              <Image source={{uri: image}} style={styles.story} />
              <Text style={{color: Colors.WHITE}}>
                {name.length > 11
                  ? name.slice(0, 10).toLocaleLowerCase() + '...'
                  : name.toLocaleLowerCase()}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
    paddingBottom: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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
export default Stories;
