import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'native-base';
import styles from './styles/Direction';

const Direction = () => (
  <View style={styles.Container}>
    <View style={styles.IconContainer}>
      <Icon name="directions" type="MaterialIcons" style={styles.Icon} />
    </View>
    <View style={styles.PlaceContainer}>
      <Text style={styles.PlaceText}>
        {'Jalan Banda'}
      </Text>
    </View>
  </View>
);

export default Direction;
