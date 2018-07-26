import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles/LocationInfo';

const RideMenu = ({ data, onCancel, onSelect }) => (
  <View style={styles.Container}>
    <View style={styles.InfoContainer}>
      <View style={styles.InfoIconContainer}>
        <Icon name="location-pin" type="Entypo" style={styles.InfoIcon} />
      </View>
      <View style={styles.InfoTextContainer}>
        {data.isFetch ? null : (
          <View>
            <Text style={styles.InfoTextTitle}>
              {data.address}
            </Text>
            <Text style={styles.InfoText}>
              {data.fullAddress}
            </Text>
          </View>
        )}
      </View>
    </View>
    <View style={styles.ButtonContainer}>
      <TouchableHighlight style={[styles.Button, styles.ButtonContact]} onPress={onSelect}>
        <Text style={[styles.Text, styles.TextContact]}>
          {'Select'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.Button, styles.ButtonCancel]} onPress={onCancel}>
        <Text style={[styles.Text, styles.TextCancel]}>
          {'Cancel'}
        </Text>
      </TouchableHighlight>
    </View>
  </View>
);

RideMenu.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onCancel: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default RideMenu;
