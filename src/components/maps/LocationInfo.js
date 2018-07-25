import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './styles/LocationInfo';

const RideMenu = () => (
  <View style={styles.Container}>
    <View style={styles.InfoContainer}>
      <View style={styles.InfoIconContainer}>
        <Icon name="location-pin" type="Entypo" style={styles.InfoIcon} />
      </View>
      <View style={styles.InfoTextContainer}>
        <Text style={styles.InfoTextTitle}>
          {'Jalan Haji gofur'}
        </Text>
        <Text style={styles.InfoText}>
          {'Jalan Haji gofur, cimahi, bandung, jawa barat'}
        </Text>
      </View>
    </View>
    <View style={styles.ButtonContainer}>
      <TouchableHighlight style={[styles.Button, styles.ButtonContact]}>
        <Text style={[styles.Text, styles.TextContact]}>
          {'Select'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.Button, styles.ButtonCancel]}>
        <Text style={[styles.Text, styles.TextCancel]}>
          {'Cancel'}
        </Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default RideMenu;
