import React from 'react';
import { View } from 'react-native';
import { Container, Icon } from 'native-base';
import styles from './styles/MainScreen';

const MainScreen = () => (
  <Container style={styles.Container}>
    <View style={styles.Logo}>
      <Icon name="cars" />
    </View>
  </Container>
);

export default MainScreen;
