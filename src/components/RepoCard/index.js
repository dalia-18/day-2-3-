import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import {InfoContainer} from '../InfoContainer';
import styles from './styles';
import {LimitTextLength} from './../../utils/stringUtils';
const logo = require('../../../assets/logo.png');
const reactlogo = require('../../../assets/reactlogo.png');
function RepoCard({
  imageSrc,
  title,
  description,
  issuesNumber,
  starsNumber,
  providerName,
  onPress,
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Image source={{uri: imageSrc}} style={styles.image} />
        <View style={styles.rightView}>
          <Text style={styles.title} numberOfLines={1}>
            {LimitTextLength(20, title)}
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {LimitTextLength(38, description)}
          </Text>
        </View>
      </View>

      <View style={styles.infoCardsContainer}>
        <InfoContainer
          iconName={'star'}
          text={starsNumber}
          iconColor={'#F8B703'}
          iconSize={16}
        />
        <InfoContainer
          iconName={'exclamation'}
          text={issuesNumber}
          iconColor={'#DD1212'}
          iconSize={16}
        />
        <InfoContainer
          iconName={'github'}
          text={LimitTextLength(20, providerName)}
          iconColor={'#000000'}
          iconSize={16}
        />
      </View>
    </Pressable>
  );
}

export {RepoCard};
