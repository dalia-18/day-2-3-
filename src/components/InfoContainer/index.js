import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

function InfoContainer({
  iconName,
  text,
  containerStyle,
  textStyle,
  iconSize,
  iconColor,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}
export {InfoContainer};
