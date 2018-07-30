import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import styles from './styles/Collect.js';

const Collect = () => (
  <View style={styles.Container}>
    <View style={styles.CardContainer}>
      <View>
        <Text style={styles.CardTextDetail}>
Recent Ride
          {' '}
        </Text>
        <Text style={styles.CardTextPrice}>
Rp.20000
        </Text>
      </View>
      <View>
        <Button full block style={styles.Button}>
          <Text style={styles.ButtonContainer}>
Collect
          </Text>
        </Button>
      </View>
    </View>
  </View>
);

export default Collect;
