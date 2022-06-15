import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import ChatBody from '../../components/chat/ChatBody';
import ChatHeader from '../../components/chat/ChatHeader';
import ChatStories from '../../components/chat/ChatStories';

const ChatScreen = () => {
  return (
    <View>
      <ChatHeader />
      <ChatStories />
      <ChatBody/>
    </View>
  );
};

export default ChatScreen;
