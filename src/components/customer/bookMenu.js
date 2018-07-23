import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/bookMenu';

const RequestMenu = ({ disable }) => (
  <View style={styles.Contianer}>
    <Button block full style={styles.BookButton} disabled={!disable}>
      <Text style={styles.BookButtonText}>
        {'Book Now'}
      </Text>
    </Button>
  </View>
);

RequestMenu.propTypes = {
  disable: PropTypes.bool.isRequired,
};

export default RequestMenu;
