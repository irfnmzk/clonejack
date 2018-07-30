import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import styles from './styles/Collect';

const Collect = ({ fare, onPress }) => (
  <View style={styles.Container}>
    <View style={styles.CardContainer}>
      <View>
        <Text style={styles.CardTextDetail}>
          {'Recent Ride'}
        </Text>
        <Text style={styles.CardTextPrice}>
          {fare}
        </Text>
      </View>
      <View>
        <Button full block style={styles.Button} onPress={onPress}>
          <Text style={styles.ButtonContainer}>
            {'Collect'}
          </Text>
        </Button>
      </View>
    </View>
  </View>
);

Collect.propTypes = {
  fare: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Collect;
