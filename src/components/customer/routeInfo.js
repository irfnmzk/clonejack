import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
import styles from './styles/routeInfo';

const RouteInfo = ({ info, show, onPress }) => (
  <Modal isVisible={show}>
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>
          {'ROUTE INFO'}
        </Text>
      </View>
      <View style={styles.Body}>
        <View style={styles.BodyItem}>
          <Icon name="location-arrow" type="FontAwesome" style={styles.Icon} />
          <Text style={styles.BodyItemTextHeader}>
            {'Distance'}
          </Text>
          <Text style={styles.BodyItemTextContent}>
            {`${info.distance} KM`}
          </Text>
        </View>
        <View style={styles.BodyItem}>
          <Icon name="access-time" type="MaterialIcons" style={styles.Icon} />
          <Text style={styles.BodyItemTextHeader}>
            {'Time'}
          </Text>
          <Text style={styles.BodyItemTextContent}>
            {`${info.duration} Minute`}
          </Text>
        </View>
        <View style={styles.BodyItem}>
          <Icon name="dollar" type="Foundation" style={styles.Icon} />
          <Text style={styles.BodyItemTextHeader}>
            {'Charge'}
          </Text>
          <Text style={styles.BodyItemTextContent}>
            {`Rp.${info.fare}`}
          </Text>
        </View>
      </View>
      <TouchableHighlight style={styles.Footer} onPress={onPress}>
        <Text style={styles.FooterText}>
          {'NICE'}
        </Text>
      </TouchableHighlight>
    </View>
  </Modal>
);

RouteInfo.propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
  show: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RouteInfo;
