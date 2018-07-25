import React from 'react';
import { View, Icon } from 'native-base';
import styles from './styles/SelectLocation';

const SelectLocation = () => (
  <View style={styles.Container} pointerEvents="none">
    <View style={styles.Circle}>
      <Icon name="location-pin" type="Entypo" style={styles.Icon} />
    </View>
    <View style={styles.Line} />
    <View style={styles.MiniCircle} />
  </View>
);

export default SelectLocation;
