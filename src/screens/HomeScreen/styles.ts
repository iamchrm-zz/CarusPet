import {Colors} from './../../assets/images/constants/colors';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.GREEN_DARK_6,
    },
  });

export default createStyles;
