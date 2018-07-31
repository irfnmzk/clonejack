import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/rideMenu';

const RideMenu = ({ data }) => (
  <View style={styles.Container}>
    {!data.onRide && (
      <View style={styles.InfoContainer}>
        <View style={styles.InfoItem}>
          <Icon name="user-secret" type="FontAwesome" style={styles.InfoIcon} />
          <Text style={styles.InfoText}>
            {data.driver.name}
          </Text>
        </View>
        <View style={styles.InfoItem}>
          <Icon name="motorbike" type="MaterialCommunityIcons" style={styles.InfoIcon} />
          <Text style={styles.InfoText}>
            {`${data.driver.vehicle.brand}${data.driver.vehicle.type}`}
          </Text>
        </View>
      </View>
    )}
    {!data.onRide && (
      <View style={styles.ButtonContainer}>
        <TouchableHighlight style={[styles.Button, styles.ButtonContact]}>
          <Text style={[styles.Text, styles.TextContact]}>
            {'Contact'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.Button, styles.ButtonCancel]}>
          <Text style={[styles.Text, styles.TextCancel]}>
            {'Cancel'}
          </Text>
        </TouchableHighlight>
      </View>
    )}
  </View>
);

RideMenu.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default RideMenu;
