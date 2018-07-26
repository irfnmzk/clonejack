import React, { Component } from 'react';
// import { View } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationAction from '../../actions/location';
import { getRegionFrom } from '../../utils/MapsRegion';

const mapStateToProps = ({ location, driver }) => ({
  locations: location,
  ride: driver.ride,
  hasPassenger: driver.hasPassenger,
});

const mapDispatchToProps = dispatch => ({
  location: bindActionCreators(locationAction, dispatch),
});

class Maps extends Component {
  constructor() {
    super();

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentWillMount() {
    const { location } = this.props;
    navigator.geolocation.getCurrentPosition((position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const data = getRegionFrom(latitude, longitude, accuracy);
      location.setUserRegion(data);
      location.setUserLocation({ latitude, longitude });
    });
  }

  componentDidMount() {
    const { location, rideChannel } = this.props;
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      if (rideChannel) {
        console.log('hmm');
      }
      location.setUserLocation({ latitude, longitude });
    });
  }

  onRegionChange() {}

  render() {
    const { locations, ride, hasPassenger } = this.props;
    return (
      <MapView
        style={{ height: '100%' }}
        showsUserLocation
        region={{ ...locations.region }}
        provider={PROVIDER_GOOGLE}
      >
        {hasPassenger && <MapView.Marker coordinate={ride.origin.location} />}
      </MapView>
    );
  }
}

Maps.propTypes = {
  locations: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  ride: PropTypes.instanceOf(Object).isRequired,
  hasPassenger: PropTypes.bool.isRequired,
  rideChannel: PropTypes.instanceOf(Object),
};

Maps.defaultProps = {
  rideChannel: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
