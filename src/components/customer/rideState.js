import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/rideState';

const RideState = ({ data }) => (
  <View style={styles.Container}>
    <Text style={styles.Text}>
      {data.driverArrive ? 'DRIVER WAITING AT LOCATION' : 'DRIVER CONFIRMED AND COMING'}
    </Text>
  </View>
);

RideState.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default RideState;
