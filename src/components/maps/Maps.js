import React, { Component } from 'react';
// import { Text } from 'react-native';
import MapView from 'react-native-maps';
import { getRegionFrom } from '../../utils/MapsRegion';

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
    navigator.geolocation.getCurrentPosition((position) => {
      const { accuracy, latitude, longitude } = position.coords;
      const data = getRegionFrom(latitude, longitude, accuracy);
      this.setState({
        ...data,
      });
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

  onRegionChange(region) {
    this.setState({
      ...region,
    });
  }

  render() {
    return <MapView style={{ height: '97%' }} showsUserLocation region={{ ...this.state }} />;
  }
}

export default Maps;
