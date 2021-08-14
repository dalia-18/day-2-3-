import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const logo = require('../../../assets/logo.png');
function RepoHeader({imageSrc, text, containerStyle, imageStyle, textStyle}) {
  return (
    <View style={styles.container}>
      <Image
        source={imageSrc ? { uri: imageSrc } : logo}
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export {RepoHeader};
