import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Camera from 'react-native-vector-icons/Feather';
import Notify from 'react-native-vector-icons/Ionicons';
import Message from 'react-native-vector-icons/Feather';
import {Colors} from '../../assets/images/constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsLeft}>
        <TouchableOpacity>
          <Camera name="camera" style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textCenter}>CarusPet</Text>
      </View>
      <View style={styles.iconsRight}>
        <TouchableOpacity>
          <Notify name="notifications-outline" style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Message name="message-circle" style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: '#1B4332',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  iconsLeft: {
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: 30,
    color: Colors.WHITE,
  },
  textCenter: {
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  iconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
