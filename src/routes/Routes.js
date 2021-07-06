import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from '../navigation/BottomNavigation';
import Search from '../screen/Search';
import Home from '../screen/Home';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
const IconFontAwesome = require('react-native-vector-icons/FontAwesome')
  .default;

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Sering Diputar'}
        component={BottomNavigation}
        options={{
          headerTitleStyle: {color: '#6C5E6F'},
          headerLeft: () => {
            return (
              <TouchableOpacity>
                <Icon name={'arrow-left'} size={24} color={'#9E979F'} />
              </TouchableOpacity>
            );
          },

          headerTransparent: true,
          headerTranslucent: true,

          headerShown: true,
          headerRight: () => {
            return (
              <IconFontAwesome
                name={'ellipsis-v'}
                size={18}
                color={'#B7B7B7'}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
