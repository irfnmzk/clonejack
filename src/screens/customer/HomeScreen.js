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

const mapStateToProps = ({ customer }) => ({
  isSelectedDest: customer.customerUi.destinationSelected,
  destination: customer.ride.destination.description,
  origin: customer.ride.origin.description,
  isBooked: customer.customerUi.isBooked,
  routeInfo: customer.ride.routeInfo,
  isSearching: customer.searchingDriver,
});

const mapDispatchToProps = dispatch => ({
  customer: bindActionCreators(customerAction, dispatch),
  location: bindActionCreators(locationAction, dispatch),
});

Pusher.logToConsole = true;

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

    this.openDestinationSelect = this.openDestinationSelect.bind(this);
    this.openOriginSelect = this.openOriginSelect.bind(this);
    this.onBookPressed = this.onBookPressed.bind(this);
    this.toggleRouteInfo = this.toggleRouteInfo.bind(this);
    this.requestDriver = this.requestDriver.bind(this);
  }

  componentWillMount() {
    this.pusher = new Pusher('d5e8162e2071d516fe7b', {
      authEndpoint: 'https://pusher-channels-auth-example-hdzhdqknhl.now.sh/pusher/auth',
      cluster: 'ap1',
      encrypted: true,
    });

    this.driver = this.pusher.subscribe('private-drivers');
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
      origin, destination, routeInfo, customer,
    } = this.props;
    this.driver.trigger('client-request-driver', {
      origin,
      destination,
      routeInfo,
    });
    customer.searchDriver();
  }

  render() {
    const {
      navigation,
      destination,
      origin,
      isSelectedDest,
      isBooked,
      routeInfo,
      isSearching,
    } = this.props;
    const { showRouteInfo } = this.state;
    return (
      <Container>
        <Header navigation={navigation} title="Let's Go" sideBar />
        <View style={styles.Container}>
          <Maps />
        </View>
        <PickLocation
          onDestinationPress={this.openDestinationSelect}
          onOriginPress={this.openOriginSelect}
          origin={origin}
          destination={destination}
          isBooked={isBooked}
        />
        {isBooked ? (
          <RequestMenu
            infoPress={this.toggleRouteInfo}
            requestPress={this.requestDriver}
            disable={isSearching}
          />
        ) : (
          <BookMenu disable={isSelectedDest} onPress={this.onBookPressed} />
        )}
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
  isSearching: PropTypes.bool.isRequired,
};

HomeScreen.defaultProps = {
  destination: null,
  origin: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
