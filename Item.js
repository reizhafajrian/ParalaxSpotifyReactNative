import React from 'react';
import {View, Text, Animated} from 'react-native';

export default function Item({item, y}) {
    console.log(y)
  const translateY = y;
  return (
    <Animated.View
      style={[
        {width: '100%', height: 180, backgroundColor: 'red', margin: 10},
        {transform: [{translateY}]},
      ]}></Animated.View>
  );
}
