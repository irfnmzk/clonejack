import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Switch } from 'native-base';
import Maps from '../../components/maps/Maps';
import styles from './styles/HomeScreen';
import Header from '../../components/commons/Header';

class HomeScreen extends Component {
  constructor() {
    super();

    this.onMenuClicked = this.onMenuClicked.bind(this);
  }

  componentWillMount() {
    this.onMenuClicked();
  }

  onMenuClicked() {
    this.funcName = 'clicked';
    console.log(this.funcName);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header
          navigation={navigation}
          onClicked={this.onMenuClicked}
          title="Driver Home"
          sideBar
        />
        <View style={styles.DriverToggleContainer}>
          <Text style={styles.DriverToggleText}>
            {'Available'}
          </Text>
          <Switch onTintColor="#1E5578" value />
        </View>
        <Maps />
      </Container>
    );
  }
}

export default HomeScreen;
