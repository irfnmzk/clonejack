import React, { Component } from 'react';
// import { View } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapViewDirections from 'react-native-maps-directions';
import * as locationAction from '../../actions/location';
import * as customerAction from '../../actions/customer';
import { getRegionFrom } from '../../utils/MapsRegion';
import { getAddress } from '../../utils/NearbyPlace';

const mapStateToProps = ({ location, customer }) => ({
  locations: location,
  destination: customer.ride.destination.location,
  origin: customer.ride.origin.location,
  hasDirection: customer.customerUi.hasDirection,
  selectViaMap: customer.customerUi.selectViaMap,
  getAddressLoading: customer.selectedLocation.isFetch,
  isSelectedDest: customer.customerUi.destinationSelected,
});

const mapDispatchToProps = dispatch => ({
  location: bindActionCreators(locationAction, dispatch),
  customer: bindActionCreators(customerAction, dispatch),
});

class Maps extends Component {
  constructor() {
    super();

    this.maps = null;

    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.getRefMaps = this.getRefMaps.bind(this);
  }

  componentWillMount() {
    const { location, customer } = this.props;
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const data = getRegionFrom(latitude, longitude, accuracy);
      location.setUserRegion(data);
      const description = await getAddress({ latitude, longitude });
      customer.setCustomerOrigin({
        description,
        location: { latitude: data.latitude, longitude: data.longitude },
      });
    });
  }

  componentDidMount() {
    const { location } = this.props;
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const region = getRegionFrom(latitude, longitude, accuracy);
      location.setUserRegion(region);
    });
  }

  componentDidUpdate(prev) {
    const { isSelectedDest } = this.props;
    if (prev.isSelectedDest !== isSelectedDest) {
      if (isSelectedDest) {
        // TODO: Navigate To certain coords
      }
    }
  }

  onRegionChange(region) {
    const { selectViaMap, customer, getAddressLoading } = this.props;
    if (selectViaMap && !getAddressLoading) {
      customer.getAddressStart(region);
    }
  }

  onRegionChangeComplete(region) {
    const { selectViaMap, customer, location } = this.props;
    if (selectViaMap) {
      customer.getAddressFromLocation(region);
      location.setUserRegion(region);
    }
  }

  getRefMaps(ref) {
    this.maps = ref;
  }

  animateToRegion() {
    // TODO: Navigate Map
    const { locations } = this.props;
    this.maps.animateToNavigation(locations.region);
  }

  render() {
    const {
      locations, hasDirection, destination, origin, customer,
    } = this.props;
    return (
      <MapView
        style={{ height: '100%' }}
        showsUserLocation
        region={{ ...locations.region }}
        onRegionChange={this.onRegionChange}
        onRegionChangeComplete={this.onRegionChangeComplete}
        ref={this.getRefMaps}
        provider={PROVIDER_GOOGLE}
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
      </MapView>
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
  selectViaMap: PropTypes.bool.isRequired,
  getAddressLoading: PropTypes.bool.isRequired,
  isSelectedDest: PropTypes.bool.isRequired,
};

Maps.defaultProps = {
  destination: { latitude: 1, longitude: 1 },
  origin: { latitude: 1, longitude: 1 },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
