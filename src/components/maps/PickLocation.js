import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/PickLocation';

export default () => (
  <View style={styles.FloatingMenu}>
    <Text style={styles.FloatingMenuText}>
      {'Pick Location'}
    </Text>
    <Text style={styles.FloatingMenuLocation}>
      {'Pick Location'}
    </Text>
  </View>
);
