import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'native-base';
// import PropTypes from 'prop-types';
import styles from './styles/requestMenu';

const RequestMenu = () => (
  <View style={styles.Contianer}>
    <View style={styles.menuContainer}>
      <TouchableHighlight style={styles.MenuButton}>
        <View style={styles.IconContainer}>
          <Icon name="info-circle" type="FontAwesome" style={styles.Icon} />
          <Text style={styles.MenuButtonText}>
            {'Info'}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.MenuButton}>
        <View style={styles.IconContainer}>
          <Icon name="payment" type="MaterialIcons" style={styles.Icon} />
          <Text style={styles.MenuButtonText}>
            {'Payment'}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
    <Button block full style={styles.BookButton}>
      <Text style={styles.BookButtonText}>
        {'Request Driver'}
      </Text>
    </Button>
  </View>
);

RequestMenu.propTypes = {};

export default RequestMenu;
