import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/rideState';

const RideState = () => (
  <View style={styles.Container}>
    <Text style={styles.Text}>
      {'DRIVER CONFIRMED AND COMING'}
    </Text>
  </View>
);

export default RideState;
