import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, Text } from 'react-native';
import { Icon, Button } from 'native-base';
import styles from './styles/Notification';

const Notification = ({
  show, toggleNotification, count, data, onAccept, disableAccept,
}) => (
  <Modal isVisible={show} backdropOpacity={0}>
    <View style={styles.Header}>
      <Text style={styles.HeaderText}>
        {'YOU GET NEW ORDER'}
      </Text>
    </View>
    <View style={styles.Container}>
      <Icon name="motorbike" type="MaterialCommunityIcons" style={styles.Icon} />
      <View style={styles.TimerContainer}>
        <Text style={styles.TimerText}>
          {count === 0 ? 'You are late' : `${count} Seconds`}
        </Text>
      </View>
      <View style={styles.AddressContainer}>
        <Text style={styles.AddressText}>
          {data.destination ? data.destination.description : 'Loading'}
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        {disableAccept ? null : (
          <Button
            block
            style={[styles.Button, { backgroundColor: '#FC0D1C' }]}
            onPress={toggleNotification}
          >
            <Text style={styles.ButtonText}>
              {'REJECT'}
            </Text>
          </Button>
        )}
        <Button
          block
          style={[styles.Button, { backgroundColor: '#21C1D5' }]}
          onPress={onAccept}
          disabled={disableAccept}
        >
          <Text style={styles.ButtonText}>
            {disableAccept ? 'Please wait..' : 'ACCEPT'}
          </Text>
        </Button>
      </View>
    </View>
  </Modal>
);

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleNotification: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  onAccept: PropTypes.func.isRequired,
  disableAccept: PropTypes.bool.isRequired,
};

export default Notification;
