import React, { Component } from 'react';
// import { Text } from 'react-native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationAction from '../../actions/location';
import { getRegionFrom } from '../../utils/MapsRegion';

const mapStateToProps = ({ location }) => ({
  location,
});

const mapDispatchToProps = dispatch => bindActionCreators(locationAction, dispatch);

class Maps extends Component {
  constructor() {
    super();

    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.00022,
      longitudeDelta: 0.0021,
    };

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentWillMount() {
    const { setUserRegion } = this.props;
    navigator.geolocation.getCurrentPosition((position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const data = getRegionFrom(latitude, longitude, accuracy);
      setUserRegion(data);
    });
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922 * 1.5,
        longitudeDelta: 0.00421 * 1.5,
      };
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onRegionChange(region) {
    this.setState({
      ...region,
    });
  }

  render() {
    return (
      <MapView
        style={{ height: '97%' }}
        showsUserLocation
        region={{ ...this.state }}
        onPress={e => console.log(e.nativeEvent.coordinate)}
      />
    );
  }
}

Maps.propTypes = {
  setUserRegion: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
