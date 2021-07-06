import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Switch,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ChangeHeaderContext} from '../navigation/BottomNavigation';

const {width, height} = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;

export default function Home({navigation}) {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  const {changeHeader} = React.useContext(ChangeHeaderContext);

  return (
    <View style={{backgroundColor: '#442A47', flex: 1}}>
      <Animated.View
        style={{
          height: 70,
          zIndex: 3,
          backgroundColor: '#0D0D0D',
          position: 'absolute',
          top: 40,
          width: '100%',
          opacity: scrollA.interpolate({
            inputRange: [0, 300, 300],
            outputRange: [0, 0, 1],
          }),
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          top: 333,
          width: width,
          height: 50,
          zIndex: 100,
          backgroundColor: '#0D0D0D',
          transform: [
            {
              translateY: scrollA.interpolate({
                inputRange: [0, 1, width - 74, width + 10],
                outputRange: [0, -1, -(width - 74), -(width - 74)],
              }),
              // scaleY: scrollA.interpolate({
              //   inputRange: [0, width + 500],
              //   outputRange: [1, 2],
              // }),
            },
          ],
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 30,
            width: 150,
            height: 50,
            backgroundColor: '#12C252',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'relative',
            top: -25,

            transform: [
              {
                translateY: scrollA.interpolate({
                  inputRange: [0, 200, width - 74, width + 1],
                  outputRange: [0, 0, 120, 120],
                }),
                // scaleY: scrollA.interpolate({
                //   inputRange: [0,width, width + 500],
                //   outputRange: [1,0.7, 0.5],
                // }),
              },
            ],
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Shuffle play
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.FlatList
        bounces={false}
        data={[
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          12,
          2,
          3,
          4,
          1,
          2,
          3,
          1,
          4,
          11,
          33,
        ]}
        renderItem={({item, index}) => <Item item={item} />}
        ListHeaderComponent={() => <HeaderItem onScroll={scrollA} />}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
}
const HeaderItem = ({onScroll}) => {
  return (
    <Animated.View
      style={{
        width: width,
        height: width,
        justifyContent: 'space-between',

        // transform: [
        //   {
        //     translateY: onScroll.interpolate({
        //       inputRange: [1, 2],
        //       outputRange: [1, 2],
        //     }),
        //   },
        //   {
        //     scale: onScroll.interpolate({
        //       inputRange: [-100, 0],
        //       outputRange: [2, 1],
        //     }),
        //   },
        // ],
      }}>
      <LinearGradient
        colors={['#442A47', '#0D0D0D']}
        style={[
          {flex: 1, justifyContent: 'space-between', paddingHorizontal: 16},
        ]}>
        <View height={20} />
        <Animated.Image
          source={{
            uri:
              'https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-id.jpg',
          }}
          style={{
            width: 192,
            height: 192,
            alignSelf: 'center',
            opacity: 0.5,
            transform: [
              {
                translateY: onScroll.interpolate({
                  inputRange: [1, 2],
                  outputRange: [1, 2],
                }),
              },
              {
                scale: onScroll.interpolate({
                  inputRange: [-100, 0],
                  outputRange: [1, 0.9],
                }),
              },
            ],
          }}
        />
        <View
          style={{justifyContent: 'space-between', backgroundColor: '#0D0D0D'}}>
          {/* <TouchableOpacity
            style={{
              borderRadius: 30,
              width: 150,
              height: 50,
              backgroundColor: '#12C252',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              top:50
             
            }}>
            <Text
              style={{color: 'white', fontWeight: 'bold', fontSize: 18}}
              onPress={() => console.log(onScroll)}>
              Shuffle play
            </Text>
          </TouchableOpacity> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                opacity: 0.5,
              }}>
              Download
            </Text>
            <Switch trackColor={{false: '#767577', true: '#81b0ff'}} />
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const Item = ({onScroll}) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'row',
        backgroundColor: '#0D0D0D',
      }}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Olivia_Rodrigo_-_SOUR.png/220px-Olivia_Rodrigo_-_SOUR.png',
        }}
        style={{
          height: 70,
          width: 70,
          backgroundColor: 'red',
          resizeMode: 'cover',
        }}
      />
      <View width={12} />
      <View style={{paddingVertical: 10, justifyContent: 'space-around'}}>
        <Text style={{color: 'white'}}>Driver license</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#787878',
              borderRadius: 5,

              padding: 3,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Lyrics</Text>
          </View>
          <View width={10} />
          <View
            style={{
              backgroundColor: '#787878',
              borderRadius: 5,

              padding: 3,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>E</Text>
          </View>
          <View width={10} />
          <Text style={{color: '#787878', fontWeight: 'bold'}}>
            Olivia Rodrigo
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginLeft: 'auto',
        }}>
        <Icon name={'ellipsis-v'} size={24} color={'#797979'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
