import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/Pickup';

const Pickup = ({ data, onStart }) => (
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
    {data.driverArrive && (
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={onStart}>
          <Text style={styles.ButtonText}>
            {'START TRIP'}
          </Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

Pickup.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onStart: PropTypes.func.isRequired,
};

export default Pickup;
