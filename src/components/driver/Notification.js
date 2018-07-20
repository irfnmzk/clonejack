import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, Text } from 'react-native';
import { Icon, Button } from 'native-base';
import styles from './styles/Notification';

const Notification = ({ show, toggleNotification }) => (
  <Modal isVisible={show}>
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>
        {'YOU GET NEW ORDER'}
      </Text>
    </View>
    <View style={styles.Container}>
      <Icon name="motorbike" type="MaterialCommunityIcons" style={styles.Icon} />
      <View style={styles.TimerContainer}>
        <Text style={styles.TimerText}>
          {'10 Seconds'}
        </Text>
      </View>
      <View style={styles.AddressContainer}>
        <Text style={styles.AddressText}>
          {'Gedung Graha Vidya Chandra'}
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <Button
          block
          style={[styles.Button, { backgroundColor: '#FC0D1C' }]}
          onPress={toggleNotification}
        >
          <Text style={styles.ButtonText}>
            {'REJECT'}
          </Text>
        </Button>
        <Button block style={[styles.Button, { backgroundColor: '#21C1D5' }]}>
          <Text style={styles.ButtonText}>
            {'ACCEPT'}
          </Text>
        </Button>
      </View>
    </View>
  </Modal>
);

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleNotification: PropTypes.func.isRequired,
};

export default Notification;
