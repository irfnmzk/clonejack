import React from 'react';
import { View, Text } from 'react-native';
import { Container, Icon, Button } from 'native-base';
import styles from './styles/MainScreen';

const MainScreen = () => (
  <Container style={styles.Container}>
    <View style={styles.Logo}>
      <Icon name="motorcycle" type="FontAwesome" style={styles.IconLogo} />
      <Text style={styles.TextLogo}>
        {'CloneJack'}
      </Text>
    </View>
    <View style={styles.ButtonContainer}>
      <Button block rounded style={styles.Button}>
        <Text style={styles.TextLogo}>
          {'Login'}
        </Text>
      </Button>
      <Button block rounded style={styles.Button}>
        <Text style={styles.TextLogo}>
          {'Register'}
        </Text>
      </Button>
    </View>
  </Container>
);

export default MainScreen;
