import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#1E5578',
  },
});

const MainScreen = () => <Container style={styles.Container} />;

export default MainScreen;
