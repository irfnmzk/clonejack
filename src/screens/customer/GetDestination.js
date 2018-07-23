import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles/GetDestination';
import Header from '../../components/commons/Header';
import { setCustomerDestination } from '../../actions/customer';

const mapStateToProps = ({ location }) => ({
  myLocation: location.userLocation,
});

const mapDispatchToProps = dispatch => ({
  setCustomerDest: loc => dispatch(setCustomerDestination(loc)),
});

class GetDestination extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  render() {
    const { navigation, myLocation, setCustomerDest } = this.props;
    const userLocation = {
      description: 'Use My Location',
      geometry: { location: { lat: myLocation.latitude, lng: myLocation.longtitude } },
    };
    return (
      <Container>
        <Header navigation={navigation} title="Destination" />
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={3}
          autoFocus
          fetchDetails
          listViewDisplayed="auto"
          query={{
            key: 'AIzaSyBYadKYHnjTGjc9OqSj3DHWm9myop2B9Aw',
            language: 'id',
            types: 'geocode',
          }}
          onPress={(data, detail) => {
            const place = { description: data.description, location: detail.geometry.location };
            setCustomerDest(place);
            navigation.goBack();
          }}
          predefinedPlaces={[userLocation]}
          styles={styles}
        />
      </Container>
    );
  }
}

GetDestination.propTypes = {
  myLocation: PropTypes.instanceOf(Object).isRequired,
  setCustomerDest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetDestination);
