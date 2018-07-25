import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/Direction';

const Direction = ({ data }) => (
  <View style={styles.Container}>
    <View style={styles.IconContainer}>
      <Icon name="directions" type="MaterialIcons" style={styles.Icon} />
    </View>
    <View style={styles.PlaceContainer}>
      <Text style={styles.PlaceText}>
        {data.origin.description}
      </Text>
    </View>
  </View>
);

Direction.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Direction;
