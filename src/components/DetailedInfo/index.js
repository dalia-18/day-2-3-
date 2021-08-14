import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from "./styles";

function DetailedInfo({
  number,
  text,
  textStyle,
  numberStyle,
  iconName,
  iconColor,
}) {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={iconName} size={36} color={iconColor} />
      <Text style={[styles.infoText, textStyle]}>{text}</Text>
      <Text style={[styles.infoNumber, numberStyle]}>{number}</Text>
    </View>
  );
}

export { DetailedInfo };