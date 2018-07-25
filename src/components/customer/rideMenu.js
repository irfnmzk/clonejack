import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Icon } from 'native-base';
import styles from './styles/rideMenu';

const RideMenu = () => (
  <View style={styles.Container}>
    <View style={styles.InfoContainer}>
      <View style={styles.InfoItem}>
        <Icon name="user-secret" type="FontAwesome" style={styles.InfoIcon} />
        <Text style={styles.InfoText}>
          {'Irfan Marzuki'}
        </Text>
      </View>
      <View style={styles.InfoItem}>
        <Icon name="motorbike" type="MaterialCommunityIcons" style={styles.InfoIcon} />
        <Text style={styles.InfoText}>
          {'Honda Jazz'}
        </Text>
      </View>
    </View>
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
  </View>
);

export default RideMenu;
