import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Switch } from 'native-base';
import styles from './styles/HomeScreen';
import Header from '../../components/commons/Header';

class HomeScreen extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Driver Home" sideBar />
        <View style={styles.DriverToggleContainer}>
          <Text>
            {'Avaible'}
          </Text>
          <Switch style={{ color: 'red' }} value />
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
