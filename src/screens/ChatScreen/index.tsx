import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { FC, useMemo } from 'react'
import { Text, View } from 'react-native'
import createStyles from './styles'

interface IProps{
    navigation: NavigationProp<ParamListBase>
}
const ChatScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), [])
    return (
        <View style={styles.body}>
            <Text style={styles.text}>ChatScreen</Text>
        </View>
    )
}

export default ChatScreen


