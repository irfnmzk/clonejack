import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Switch } from 'native-base';
import Maps from '../../components/maps/CustomerMaps';
import styles from './styles/HomeScreen';
import Header from '../../components/commons/Header';
import Notification from '../../components/driver/Notification';

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      showNotification: true,
    };

    this.onMenuClicked = this.onMenuClicked.bind(this);
    this.toggleNotification = this.toggleNotification.bind(this);
  }

  componentWillMount() {
    this.onMenuClicked();
  }

  onMenuClicked() {
    this.funcName = 'clicked';
    console.log(this.funcName);
  }

  toggleNotification() {
    this.setState(prev => ({ showNotification: !prev.showNotification }));
  }

  render() {
    const { navigation } = this.props;
    const { showNotification } = this.state;
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
        <Notification show={showNotification} toggleNotification={this.toggleNotification} />
      </Container>
    );
  }
}

export default HomeScreen;
