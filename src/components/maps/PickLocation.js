import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/PickLocation';

const PickLocation = ({ disabled, onPress }) => (
  <TouchableOpacity style={styles.FloatingMenu} onPress={onPress} disabled={disabled}>
    <Text style={styles.FloatingMenuText}>
      {'Select destination'}
    </Text>
    <Text style={styles.FloatingMenuLocation}>
      {'Please select..'}
    </Text>
  </TouchableOpacity>
);

PickLocation.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

PickLocation.defaultProps = {
  disabled: false,
};

export default PickLocation;
