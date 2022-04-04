import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React from 'react';
import VerticalIcon from 'react-native-vector-icons/Feather';
import {POSTS} from '../../data/data';
import {Colors} from '../../assets/images/constants/colors';

const Post = () => {
  return (
    <>
      {POSTS.map(({description, id, image, likes, user, date}) => (
        <View style={styles.container} key={id}>
          <View style={styles.image}>
            <TouchableOpacity>
              <Image source={{uri: image}} style={styles.image} />
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.body}>
              <View style={styles.header}>
                <Text> {description}</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#C4C4C4',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
            </View>

            <View style={styles.footer}>
              <View>
                <Image source={{uri: image}} style={styles.story} />
              </View>
              <View style={styles.users}>
                <Text>{user}</Text>
                <Text>{date}</Text>
              </View>
              <View style={styles.iconsBottom}>
                <TouchableOpacity>
                  <VerticalIcon name="heart" size={35} color={Colors.BLACK} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <VerticalIcon
                    name="message-square"
                    size={35}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <VerticalIcon name="share" size={35} color={Colors.BLACK} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  iconsBottom: {
    flexDirection: 'row',

    marginTop: 15,
  },
  users: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 100,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 30,
    width: '100%',
    margin: 'auto',
    height: 'auto',
    maxWidth: 370,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    paddingBottom: 10,
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
  body: {},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: Colors.BLACK,
  },
  image: {
    width: '100%',
    height: 282,
    maxHeight: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
export default Post;
