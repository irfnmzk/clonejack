import React, { Component } from 'react';
// import { View } from 'react-native';
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
      const { accuracy, latitude, longitude } = position.coords;
      const region = getRegionFrom(latitude, longitude, accuracy);
      this.onRegionChange(region);
    });
  }

  onRegionChange(region) {
    const { setUserRegion } = this.props;
    setUserRegion(region);
  }

  render() {
    const { location } = this.props;
    console.log(location.region);
    return (
      <MapView
        style={{ height: '100%' }}
        showsUserLocation
        region={{ ...location.region }}
        onPress={e => console.log(e.nativeEvent.coordinate)}
      />
    );
  }
}

Maps.propTypes = {
  setUserRegion: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Maps);
