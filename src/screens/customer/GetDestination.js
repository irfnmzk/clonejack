import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles/GetDestination';
import Header from '../../components/commons/Header';
import { setCustomerDestination, setCustomerOrigin } from '../../actions/customer';

const mapStateToProps = ({ location }) => ({
  myLocation: location.userLocation,
});

const mapDispatchToProps = dispatch => ({
  setCustomerDest: loc => dispatch(setCustomerDestination(loc)),
  setCustomerOrg: loc => dispatch(setCustomerOrigin(loc)),
});

class GetDestination extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  decideNextAction(place) {
    const { navigation, setCustomerDest, setCustomerOrg } = this.props;
    const type = navigation.getParam('type');
    if (type === 'origin') {
      setCustomerOrg(place);
    } else {
      setCustomerDest(place);
    }
    return navigation.goBack();
  }

  render() {
    const { navigation, myLocation } = this.props;
    const type = navigation.getParam('type');
    let userLocation = {
      description: 'Use My Location',
      geometry: { location: { lat: myLocation.latitude, lng: myLocation.longtitude } },
    };
    if (type !== 'origin') {
      userLocation = null;
    }
    return (
      <Container>
        <Header navigation={navigation} title={type === 'origin' ? 'Origin' : 'Destination'} />
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
            if (data.description === 'Select in Map') {
              return navigation.goBack();
            }
            const place = {
              description: data.description,
              location: {
                latitude: detail.geometry.location.lat,
                longitude: detail.geometry.location.lng,
              },
            };
            return this.decideNextAction(place);
          }}
          predefinedPlaces={[
            {
              description: 'Select in Map',
              location: {
                latitude: 1,
                longitude: 1,
              },
            },
            userLocation,
          ]}
          styles={styles}
        />
      </Container>
    );
  }
}

GetDestination.propTypes = {
  myLocation: PropTypes.instanceOf(Object).isRequired,
  setCustomerDest: PropTypes.func.isRequired,
  setCustomerOrg: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetDestination);
