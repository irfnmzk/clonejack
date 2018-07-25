import React from 'react';
import { Button, Icon } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { MAIN_BLUE } from '../../configs/color';

const styles = StyleSheet.create({
  Icon: {
    color: MAIN_BLUE,
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
