import React from 'react';

import { Button, Icon } from 'native-base';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  Icon: {
    color: '#1E5578',
  },
});

const SidebarButton = ({ navigation }) => (
  <View>
    <Button
      transparent
      onPress={() => {
        navigation.openDrawer();
      }}
    >
      <Icon name="menu" type="Entypo" style={styles.Icon} />
    </Button>
  </View>
);

export default SidebarButton;
