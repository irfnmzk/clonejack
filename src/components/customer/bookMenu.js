import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/bookMenu';

const RequestMenu = ({ disable, onPress }) => (
  <View style={styles.Contianer}>
    <Button block full style={styles.BookButton} disabled={!disable} onPress={onPress}>
      <Text style={styles.BookButtonText}>
        {'Book Now'}
      </Text>
    </Button>
  </View>
);

RequestMenu.propTypes = {
  disable: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RequestMenu;
