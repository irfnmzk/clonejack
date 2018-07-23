import React, { Component } from 'react';
// import { View } from 'react-native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationAction from '../../actions/location';
import { getRegionFrom } from '../../utils/MapsRegion';

const mapStateToProps = ({ location }) => ({
  locations: location,
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
    const { locations } = this.props;
    return (
      <MapView.Animated
        style={{ height: '100%' }}
        showsUserLocation
        region={new MapView.AnimatedRegion({ ...locations.region })}
        onPress={e => console.log(e.nativeEvent.coordinate)}
      />
    );
  }
}

Maps.propTypes = {
  locations: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

Maps.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
