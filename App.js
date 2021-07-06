import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import Item from './Item';
import Routes from './src/routes/Routes';

export const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        backgroundColor={backgroundColor}
        translucent={true}
    
        {...props}
      />
    </SafeAreaView>
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'black',
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <MyStatusBar
        backgroundColor={"black"}
        barStyle="light-content"
   
      />

        <Routes />
    
    </NavigationContainer>
  );
}
