import { Colors } from '../../assets/images/constants/colors';
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


const createStyles=()=> StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: RFValue(25),
        fontWeight: '300',
        color: Colors.BLACK
    }
})

export default createStyles