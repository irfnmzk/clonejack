import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/PickLocation';

const PickLocation = ({
  origin, destination, onDestinationPress, onOriginPress, isBooked,
}) => (
  <View>
    <TouchableOpacity style={[styles.FloatingMenu, { bottom: 600 }]} onPress={onDestinationPress}>
      <Text style={styles.FloatingMenuText}>
        {'Destination'}
      </Text>
      <Text style={styles.FloatingMenuLocation}>
        {destination || 'Please select'}
      </Text>
    </TouchableOpacity>
    {isBooked && (
      <TouchableOpacity style={[styles.FloatingMenu, { bottom: 535 }]} onPress={onOriginPress}>
        <Text style={styles.FloatingMenuText}>
          {'Origin'}
        </Text>
        <Text style={styles.FloatingMenuLocation}>
          {origin || 'Please select'}
        </Text>
      </TouchableOpacity>
    )}
  </View>
);

PickLocation.propTypes = {
  onDestinationPress: PropTypes.func.isRequired,
  onOriginPress: PropTypes.func.isRequired,
  destination: PropTypes.string,
  origin: PropTypes.string,
  isBooked: PropTypes.bool.isRequired,
};

PickLocation.defaultProps = {
  origin: null,
  destination: null,
};

export default PickLocation;
