import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import Modal from 'react-native-modal';
import styles from './styles/routeInfo';

const RouteInfo = () => (
  <Modal isVisible>
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
            {'6.7KM'}
          </Text>
        </View>
        <View style={styles.BodyItem}>
          <Icon name="access-time" type="MaterialIcons" style={styles.Icon} />
          <Text style={styles.BodyItemTextHeader}>
            {'Time'}
          </Text>
          <Text style={styles.BodyItemTextContent}>
            {'1 Minutes'}
          </Text>
        </View>
        <View style={styles.BodyItem}>
          <Icon name="dollar" type="Foundation" style={styles.Icon} />
          <Text style={styles.BodyItemTextHeader}>
            {'Charge'}
          </Text>
          <Text style={styles.BodyItemTextContent}>
            {'Rp. 1000'}
          </Text>
        </View>
      </View>
      <TouchableHighlight style={styles.Footer}>
        <Text style={styles.FooterText}>
          {'NICE'}
        </Text>
      </TouchableHighlight>
    </View>
  </Modal>
);

RouteInfo.propTypes = {};

export default RouteInfo;
