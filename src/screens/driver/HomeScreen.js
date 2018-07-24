import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Switch } from 'native-base';
import Pusher from 'pusher-js/react-native';
import timer from 'react-native-timer';
import Maps from '../../components/maps/DriverMaps';
import styles from './styles/HomeScreen';
import Header from '../../components/commons/Header';
import Notification from '../../components/driver/Notification';

Pusher.logToConsole = true;

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      showNotification: false,
      count: 10,
    };

    // Pusher data
    this.pusher = null;
    this.driver = null;
    this.ride = null;

    this.toggleNotification = this.toggleNotification.bind(this);
  }

  componentWillMount() {
    this.pusher = new Pusher('d5e8162e2071d516fe7b', {
      authEndpoint: 'https://pusher-channels-auth-example-hdzhdqknhl.now.sh/pusher/auth',
      cluster: 'ap1',
      encrypted: true,
    });

    this.driver = this.pusher.subscribe('private-drivers');

    this.driver.bind('client-request-driver', (data) => {
      // TODO: HANDLE CLIENT REQUEST DRIVER
      console.log(data);
      const { showNotification } = this.state;
      if (!showNotification) this.showNotification();
    });
  }

  showNotification() {
    this.setState({
      showNotification: true,
    });
    timer.setInterval(
      'count',
      () => {
        this.setState(
          prev => ({ count: prev.count - 1 }),
          () => {
            const { count } = this.state;
            if (count < 1) {
              this.clearCountNotification();
            }
          },
        );
      },
      1000,
    );
  }

  clearCountNotification() {
    this.setState(
      prev => ({ showNotification: !prev.showNotification, count: 10 }),
      () => timer.clearInterval('count'),
    );
  }

  toggleNotification() {
    this.clearCountNotification();
  }

  render() {
    const { navigation } = this.props;
    const { showNotification, count } = this.state;
    return (
      <Container>
        <Header navigation={navigation} title="Driver Home" sideBar />
        <View style={styles.DriverToggleContainer}>
          <Text style={styles.DriverToggleText}>
            {'Avaiable'}
          </Text>
          <Switch onTintColor="#1E5578" value />
        </View>
        <Maps />
        <Notification
          show={showNotification}
          toggleNotification={this.toggleNotification}
          count={count}
        />
      </Container>
    );
  }
}

export default HomeScreen;
