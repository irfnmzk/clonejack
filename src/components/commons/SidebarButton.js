import React from 'react';
import { Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Icon: {
    color: '#1E5578',
  },
});

export default () => (
  <Button transparent>
    <Icon name="menu" type="Entypo" style={styles.Icon} />
  </Button>
);
