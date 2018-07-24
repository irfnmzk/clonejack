import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pusher from 'pusher-js/react-native';
import timer from 'react-native-timer';
import * as driverAction from '../../actions/driver';
import Maps from '../../components/maps/DriverMaps';
import Header from '../../components/commons/Header';
import Notification from '../../components/driver/Notification';
import StandBy from '../../components/driver/StandBy';
import Direction from '../../components/driver/Direction';

const mapStateToProps = ({ driver }) => ({
  drivers: driver,
  rideData: driver.ride,
  hasPassenger: driver.hasPassenger,
});

const mapDispatchToProps = dispatch => ({
  driver: bindActionCreators(driverAction, dispatch),
});

Pusher.logToConsole = true;

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      showNotification: false,
      count: 10,
      avaiable: false,
    };

    // Pusher data
    this.pusher = null;
    this.driver = null;
    this.ride = null;

    this.toggleNotification = this.toggleNotification.bind(this);
    this.toggleAvaiable = this.toggleAvaiable.bind(this);
  }

  componentWillMount() {
    const { driver } = this.props;
    this.pusher = new Pusher('d5e8162e2071d516fe7b', {
      authEndpoint: 'https://pusher-channels-auth-example-hdzhdqknhl.now.sh/pusher/auth',
      cluster: 'ap1',
      encrypted: true,
    });

    this.driver = this.pusher.subscribe('private-drivers');

    this.driver.bind('client-request-driver', (data) => {
      const { showNotification, avaiable } = this.state;
      if (!showNotification && avaiable) {
        driver.setPassenger(data);
        this.showNotification();
      }
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

  toggleAvaiable() {
    console.log('pressed');
    this.setState(prev => ({ avaiable: !prev.avaiable }));
  }

  render() {
    const { navigation, hasPassenger, rideData } = this.props;
    const { showNotification, count, avaiable } = this.state;
    return (
      <Container>
        <Header navigation={navigation} title="Driver Home" sideBar />
        {hasPassenger ? (
          <Direction />
        ) : (
          <StandBy avaiable={avaiable} toggle={this.toggleAvaiable} />
        )}
        <View>
          <Maps />
        </View>
        <Notification
          show={showNotification}
          toggleNotification={this.toggleNotification}
          data={rideData}
          count={count}
        />
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  driver: PropTypes.instanceOf(Object).isRequired,
  rideData: PropTypes.instanceOf(Object).isRequired,
  hasPassenger: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
