import React, { Component } from 'react';
// import { View } from 'react-native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapViewDirections from 'react-native-maps-directions';
import * as locationAction from '../../actions/location';
import * as customerAction from '../../actions/customer';
import { getRegionFrom } from '../../utils/MapsRegion';

const mapStateToProps = ({ location, customer }) => ({
  locations: location,
  destination: customer.ride.destination.location,
  origin: customer.ride.origin.location,
  hasDirection: customer.customerUi.hasDirection,
});

const mapDispatchToProps = dispatch => ({
  location: bindActionCreators(locationAction, dispatch),
  customer: bindActionCreators(customerAction, dispatch),
});

class Maps extends Component {
  constructor() {
    super();

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentWillMount() {
    const { location, customer } = this.props;
    navigator.geolocation.getCurrentPosition((position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const data = getRegionFrom(latitude, longitude, accuracy);
      location.setUserRegion(data);
      customer.setCustomerOrigin({
        description: 'My Location',
        location: { latitude: data.latitude, longitude: data.longitude },
      });
    });
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const region = getRegionFrom(latitude, longitude, accuracy);
      this.onRegionChange(region);
    });
  }

  onRegionChange(region) {
    const { location } = this.props;
    location.setUserRegion(region);
  }

  render() {
    const {
      locations, hasDirection, destination, origin, customer,
    } = this.props;
    return (
      <MapView.Animated
        style={{ height: '100%' }}
        showsUserLocation
        region={new MapView.AnimatedRegion({ ...locations.region })}
        onPress={e => console.log(e.nativeEvent.coordinate)}
      >
        {hasDirection && (
          <MapViewDirections
            apikey="AIzaSyDc63AZDDPycmk1Vc9hmskLZvu1AbWIAbk"
            origin={origin}
            destination={destination}
            strokeWidth={5}
            strokeColor="hotpink"
            onReady={(data) => {
              customer.setRouteInfo(data);
            }}
          />
        )}
        {destination && <MapView.Marker coordinate={destination} />}
      </MapView.Animated>
    );
  }
}

Maps.propTypes = {
  locations: PropTypes.instanceOf(Object).isRequired,
  destination: PropTypes.instanceOf(Object),
  origin: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object).isRequired,
  customer: PropTypes.instanceOf(Object).isRequired,
  hasDirection: PropTypes.bool.isRequired,
};

Maps.defaultProps = {
  destination: { latitude: 1, longitude: 1 },
  origin: { latitude: 1, longitude: 1 },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
