import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/PickLocation';

const PickLocation = ({ disabled, onPress }) => (
  <TouchableOpacity style={styles.FloatingMenu} onPress={onPress} disabled={disabled}>
    <Text style={styles.FloatingMenuText}>
      {'Pick Location'}
    </Text>
    <Text style={styles.FloatingMenuLocation}>
      {'Pick Location'}
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
