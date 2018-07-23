import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/PickLocation';

const PickLocation = ({ location, onPress }) => (
  <TouchableOpacity style={styles.FloatingMenu} onPress={onPress}>
    <Text style={styles.FloatingMenuText}>
      {'Destination'}
    </Text>
    <Text style={styles.FloatingMenuLocation}>
      {location || 'Please select'}
    </Text>
  </TouchableOpacity>
);

PickLocation.propTypes = {
  onPress: PropTypes.func.isRequired,
  location: PropTypes.string,
};

PickLocation.defaultProps = {
  location: null,
};

export default PickLocation;
