import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screen/Home';
import Search from '../screen/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect} from '@react-navigation/native';
import {IC_COLLECTION, IC_HOME, IC_SEARCH} from '../assets';

const Tab = createMaterialBottomTabNavigator();
export const ChangeHeaderContext = React.createContext();

export default function BottomNavigation({navigation}) {
  const [state, setstate] = useState('');

  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'HEADER_TYPE':
        return {
          ...prevState,
          headertype: action.headertype,
        };
    }
  };
  const [states, dispatch] = React.useReducer(reducer, {
    headertype: true,
  });
  const memoFun = React.useMemo(
    () => ({
      changeHeader: value => {
        dispatch({type: 'HEADER_TYPE', headertype: value});
      },
    }),
    [],
  );

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerTitle: state,

        headerShown: true,
      });
    }, [state]),
  );

  return (
    <ChangeHeaderContext.Provider value={memoFun}>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{
          backgroundColor: '#1D1D1D',
          height: 70,
        }}
        activeColor="#f0edf6"
        labeled={true}
        shifting={false}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          listeners={{
            focus: () => setstate('Sering Diputar'),
          }}
          options={({naviagtion}) => {
            return {
              tabBarIcon: ({focused}) => {
                return <IC_HOME />;
              },
            };
          }}
        />
        <Tab.Screen
          name={'Cari'}
          component={Search}
          listeners={{
            focus: () => setstate('Search'),
          }}
          options={({naviagtion}) => {
            return {
              tabBarIcon: ({focused}) => {
                return <IC_SEARCH />;
              },
            };
          }}
        />
        <Tab.Screen
          name={'Koleksi kamu'}
          component={Search}
          listeners={{
            focus: () => setstate('Koleksi'),
          }}
          options={({naviagtion}) => {
            return {
              tabBarIcon: ({focused}) => {
                return <IC_COLLECTION />;
              },
            };
          }}
        />
      </Tab.Navigator>
    </ChangeHeaderContext.Provider>
  );
}

const styles = StyleSheet.create({});
