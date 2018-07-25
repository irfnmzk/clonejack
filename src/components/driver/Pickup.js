import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles/Pickup';

const Pickup = () => (
  <View style={styles.Container}>
    <View style={styles.PickupCard}>
      <View style={styles.PickupCardName}>
        <Icon name="user" type="Entypo" style={styles.PickupCardIcon} />
        <View style={styles.PickupCardTextContainer}>
          <Text style={styles.PickupCardTextTitle}>
            {'PICK UP'}
          </Text>
          <Text style={styles.PickupCardTextName}>
            {'Irfan Marzuki'}
          </Text>
        </View>
      </View>
      <View style={styles.PickupCardTimer}>
        <Text style={styles.PickupCardTimerText}>
          {'10 MIN'}
        </Text>
      </View>
    </View>
  </View>
);

export default Pickup;
