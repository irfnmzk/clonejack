import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Container } from 'native-base';
import { bindActionCreators } from 'redux';
import * as customerAction from '../../actions/customer';
import * as locationAction from '../../actions/location';
import styles from './styles/HomeScreen';
import Maps from '../../components/maps/CustomerMaps';
import Header from '../../components/commons/Header';
import PickLocation from '../../components/maps/PickLocation';
import RequestMenu from '../../components/customer/requestMenu';
import BookMenu from '../../components/customer/bookMenu';

const mapStateToProps = ({ customer }) => ({
  isSelectedDest: customer.customerUi.destinationSelected,
  destination: customer.ride.destination.description,
  origin: customer.ride.origin.description,
  isBooked: customer.customerUi.isBooked,
});

const mapDispatchToProps = dispatch => ({
  customer: bindActionCreators(customerAction, dispatch),
  location: bindActionCreators(locationAction, dispatch),
});

class HomeScreen extends Component {
  constructor() {
    super();

    this.openDestinationSelect = this.openDestinationSelect.bind(this);
    this.openOriginSelect = this.openOriginSelect.bind(this);
    this.onBookPressed = this.onBookPressed.bind(this);
  }

  componentWillMount() {
    console.log('initial load');
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

  render() {
    console.log('props', this.props);
    const {
      navigation, destination, origin, isSelectedDest, isBooked,
    } = this.props;
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
          <RequestMenu />
        ) : (
          <BookMenu disable={isSelectedDest} onPress={this.onBookPressed} />
        )}
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
};

HomeScreen.defaultProps = {
  destination: null,
  origin: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
