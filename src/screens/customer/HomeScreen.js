import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container } from 'native-base';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pusher from 'pusher-js/react-native';
import * as customerAction from '../../actions/customer';
import * as locationAction from '../../actions/location';
import styles from './styles/HomeScreen';
import Maps from '../../components/maps/CustomerMaps';
import Header from '../../components/commons/Header';
import PickLocation from '../../components/maps/PickLocation';
import RequestMenu from '../../components/customer/requestMenu';
import BookMenu from '../../components/customer/bookMenu';
import RouteInfo from '../../components/customer/routeInfo';
import RideState from '../../components/customer/rideState';
import RideMenu from '../../components/customer/rideMenu';

const mapStateToProps = ({ customer, auth }) => ({
  isSelectedDest: customer.customerUi.destinationSelected,
  destination: customer.ride.destination.description,
  origin: customer.ride.origin.description,
  isBooked: customer.customerUi.isBooked,
  routeInfo: customer.ride.routeInfo,
  isSearching: customer.searchingDriver,
  ride: customer.ride,
  user: auth.user,
  hasRide: customer.hasRide,
});

const mapDispatchToProps = dispatch => ({
  customer: bindActionCreators(customerAction, dispatch),
  location: bindActionCreators(locationAction, dispatch),
});

Pusher.logToConsole = false;

class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      showRouteInfo: false,
    };

    // Pusher data
    this.driver = null;
    this.ride = null;
    this.pusher = null;

    // I don't know why but i like to bind everything
    this.openDestinationSelect = this.openDestinationSelect.bind(this);
    this.openOriginSelect = this.openOriginSelect.bind(this);
    this.onBookPressed = this.onBookPressed.bind(this);
    this.toggleRouteInfo = this.toggleRouteInfo.bind(this);
    this.requestDriver = this.requestDriver.bind(this);
  }

  componentWillMount() {
    const { hasRide, user, customer } = this.props;
    this.pusher = new Pusher('d5e8162e2071d516fe7b', {
      authEndpoint: 'https://pusher-channels-auth-example-hdzhdqknhl.now.sh/pusher/auth',
      cluster: 'ap1',
      encrypted: true,
    });

    this.driver = this.pusher.subscribe('private-drivers');
    this.ride = this.pusher.subscribe(`presence-rides-${user.email}`);
    this.ride.bind('pusher:subscription_succeeded', () => {
      this.ride.bind('client-driver-response', () => {
        this.ride.trigger('client-customer-response', {
          accepted: !hasRide,
        });
        this.ride.bind('client-get-driver', (data) => {
          customer.setDriverData(data);
        });
      });
    });
  }

  componentWillUnmount() {
    const { user } = this.props;

    this.pusher.unsubscribe('private-drivers');
    this.pusher.unsubscribe(`presence-rides-${user.email}`);
  }

  onBookPressed() {
    const { customer, location } = this.props;
    customer.toggleBookState();
    location.calculateNewRegion();
  }

  openDestinationSelect() {
    const { navigation } = this.props;
    navigation.navigate('GetDestination', { type: 'destination' });
  }

  openOriginSelect() {
    const { navigation } = this.props;
    navigation.navigate('GetDestination', { type: 'origin' });
  }

  toggleRouteInfo() {
    const { showRouteInfo } = this.state;
    this.setState({
      showRouteInfo: !showRouteInfo,
    });
  }

  requestDriver() {
    const {
      ride, routeInfo, customer, user,
    } = this.props;
    const { origin, destination } = ride;
    this.driver.trigger('client-request-driver', {
      origin,
      destination,
      routeInfo,
      passenger: { email: user.email },
    });
    customer.searchDriver();
  }

  renderBookMenu() {
    const { isBooked, isSelectedDest } = this.props;
    return isBooked ? (
      <RequestMenu
        infoPress={this.toggleRouteInfo}
        requestPress={this.requestDriver}
        disable={false}
      />
    ) : (
      <BookMenu disable={isSelectedDest} onPress={this.onBookPressed} />
    );
  }

  render() {
    const {
      navigation, destination, origin, isBooked, routeInfo, hasRide, ride,
    } = this.props;
    const { showRouteInfo } = this.state;
    return (
      <Container>
        <Header navigation={navigation} title="Let's Go" sideBar />
        <View style={styles.Container}>
          <Maps />
        </View>
        {hasRide ? (
          <RideState />
        ) : (
          <PickLocation
            onDestinationPress={this.openDestinationSelect}
            onOriginPress={this.openOriginSelect}
            origin={origin}
            destination={destination}
            isBooked={isBooked}
          />
        )}
        {hasRide ? <RideMenu data={ride} /> : this.renderBookMenu()}
        <RouteInfo info={routeInfo} show={showRouteInfo} onPress={this.toggleRouteInfo} />
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  destination: PropTypes.string,
  origin: PropTypes.string,
  isSelectedDest: PropTypes.bool.isRequired,
  isBooked: PropTypes.bool.isRequired,
  customer: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  routeInfo: PropTypes.instanceOf(Object).isRequired,
  ride: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  hasRide: PropTypes.bool.isRequired,
};

HomeScreen.defaultProps = {
  destination: null,
  origin: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
