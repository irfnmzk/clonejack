import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pusher from 'pusher-js/react-native';
import timer from 'react-native-timer';
import geodist from 'geodist';
import * as driverAction from '../../actions/driver';
import * as locationAction from '../../actions/location';
import Maps from '../../components/maps/DriverMaps';
import Header from '../../components/commons/Header';
import Notification from '../../components/driver/Notification';
import StandBy from '../../components/driver/StandBy';
import Direction from '../../components/driver/Direction';
import Pickup from '../../components/driver/Pickup';
import Collect from '../../components/driver/Collect';

const mapStateToProps = ({ driver, auth, location }) => ({
  locations: location,
  drivers: driver,
  rideData: driver.ride,
  hasPassenger: driver.hasPassenger,
  user: auth.user,
  rideDone: driver.ride.isDone,
});

const mapDispatchToProps = dispatch => ({
  driver: bindActionCreators(driverAction, dispatch),
  location: bindActionCreators(locationAction, dispatch),
});

Pusher.logToConsole = false;

class HomeScreen extends PureComponent {
  constructor() {
    super();

    this.state = {
      showNotification: false,
      count: 10,
      avaiable: false,
      disableAccept: false,
    };

    // Pusher data
    this.pusher = null;
    this.driver = null;
    this.ride = null;

    this.toggleNotification = this.toggleNotification.bind(this);
    this.toggleAvaiable = this.toggleAvaiable.bind(this);
    this.acceptOrder = this.acceptOrder.bind(this);
    this.startRide = this.startRide.bind(this);
    this.finishRide = this.finishRide.bind(this);
    this.clearRideData = this.clearRideData.bind(this);
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

  acceptOrder() {
    const { rideData, driver, user } = this.props;
    this.setState({
      disableAccept: true,
    });
    this.ride = this.pusher.subscribe(`presence-rides-${rideData.passenger.email}`);
    this.ride.bind('pusher:subscription_succeeded', () => {
      this.ride.trigger('client-driver-response', {
        accepted: true,
      });
      this.ride.bind('client-customer-response', (response) => {
        if (response.accepted) {
          this.clearCountNotification();
          driver.startRide();
          driver.calculateRegion();
          this.driverDistanceToOrigin();
          this.ride.trigger('client-get-driver', user);
        }
      });
    });
  }

  driverDistanceToOrigin() {
    const { locations, rideData, driver } = this.props;
    const distance = geodist(locations.userLocation, rideData.origin.location, {
      unit: 'meters',
      limit: 20,
    });
    console.log('driver ', distance);
    if (distance) {
      this.ride.trigger('client-driver-arrive', {
        arrive: true,
      });
      driver.driverArrive();
    }
  }

  clearCountNotification() {
    this.setState(
      prev => ({
        showNotification: !prev.showNotification,
        count: 10,
        disableAccept: false,
      }),
      () => timer.clearInterval('count'),
    );
  }

  toggleNotification() {
    this.clearCountNotification();
  }

  toggleAvaiable() {
    this.setState(prev => ({ avaiable: !prev.avaiable }));
  }

  startRide() {
    const { driver, location, rideData } = this.props;
    driver.driverStartRide();
    this.ride.trigger('client-driver-start-ride', { ride: true });
    location.calculateNewRegion(rideData);
  }

  finishRide() {
    const { driver } = this.props;
    driver.finishRide();
  }

  clearRideData() {
    const { driver, rideData } = this.props;
    this.ride.trigger('client-ride-finish', { finish: true });
    driver.clearData();
    this.pusher.unsubscribe(`presence-rides-${rideData.passenger.email}`);
  }

  renderRideHeader() {
    const { hasPassenger, rideData } = this.props;
    const { avaiable } = this.state;

    return hasPassenger ? (
      <Direction data={rideData} />
    ) : (
      <StandBy avaiable={avaiable} toggle={this.toggleAvaiable} />
    );
  }

  renderRide() {
    const { rideData, rideDone } = this.props;

    return rideDone ? (
      <Collect fare={rideData.routeInfo.fare} onPress={this.clearRideData} />
    ) : (
      <Pickup data={rideData} onStart={this.startRide} onComplete={this.finishRide} />
    );
  }

  render() {
    const {
      navigation, hasPassenger, rideData, rideDone,
    } = this.props;
    const { showNotification, count, disableAccept } = this.state;
    return (
      <Container>
        <Header navigation={navigation} title="Driver Home" sideBar />
        {!rideDone && this.renderRideHeader()}
        <View>
          <Maps />
        </View>
        {hasPassenger && this.renderRide()}
        <Notification
          show={showNotification}
          toggleNotification={this.toggleNotification}
          onAccept={this.acceptOrder}
          disableAccept={disableAccept}
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
  user: PropTypes.instanceOf(Object).isRequired,
  locations: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  rideDone: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
