import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropsTypes from 'prop-types';
import styles from './styles/StandBy';

const StandBy = ({ avaiable, toggle }) => (
  <View style={styles.DriverToggleContainer}>
    <Text style={styles.DriverToggleText}>
      {'Avaiable'}
    </Text>
    <Switch onTintColor="#1E5578" value={avaiable} onValueChange={toggle} />
  </View>
);

StandBy.propTypes = {
  avaiable: PropsTypes.bool.isRequired,
  toggle: PropsTypes.func.isRequired,
};

export default StandBy;
