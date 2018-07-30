import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/Pickup';

const Pickup = ({ data, onStart, onComplete }) => (
  <View style={styles.Container}>
    {!data.onRide && (
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
    )}
    {data.driverArrive
      && !data.onRide && (
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.Button} onPress={onStart}>
            <Text style={styles.ButtonText}>
              {'START TRIP'}
            </Text>
          </TouchableOpacity>
        </View>
    )}
    {data.onRide && (
      <Button style={styles.ButtonCompleteContainer} full onPress={onComplete}>
        <Text style={styles.ButtonCompleteText}>
          {'COMPLETE ORDER'}
        </Text>
      </Button>
    )}
  </View>
);

Pickup.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onStart: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Pickup;
