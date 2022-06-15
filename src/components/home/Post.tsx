import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import ColumnIcons from 'react-native-vector-icons/Ionicons';
import {POSTS} from '../../data/data';
import {Colors} from '../../assets/images/constants/colors';

const Post = () => {
  const [liked, setLiked] = useState(false);

  const likedPostById = (id: any) => {
   POSTS.find((post: any) => {
      if (post.id === id) {
        setLiked(!liked);
      }
    }
    );
  };

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
            <View>
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
              <View style={styles.users}>
                <Image source={{uri: image}} style={styles.story} />
                <View
                  style={{
                    flex: 2,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    marginLeft: 10,
                    alignContent: 'center',
                  }}>
                  <Text>{user}</Text>
                  <Text>{date}</Text>
                </View>
              </View>

              <View style={styles.iconsBottom}>
                <TouchableOpacity style={styles.separacion} onPress={() => likedPostById(id)}>
                  {liked ? (
                    <ColumnIcons
                      name="heart"
                      size={35}
                      style={{color: Colors.BLACK}}
                      color={Colors.BLACK}
                    />
                  ) : (
                    <ColumnIcons
                      name="heart-outline"
                      size={35}
                      style={{color: Colors.BLACK}}
                      color={Colors.BLACK}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.separacion}>
                  <ColumnIcons
                    name="chatbox-outline"
                    size={35}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.separacion}>
                  <ColumnIcons name="share" size={35} color={Colors.BLACK} />
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
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    width: '100%',
  },
  users: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separacion: {
    marginLeft: 10,
  },

  iconsBottom: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'flex-end',
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
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff8501',
  },

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
