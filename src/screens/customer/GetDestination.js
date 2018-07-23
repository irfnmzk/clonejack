import React, { Component } from 'react';
import { Container } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles/GetDestination';
import Header from '../../components/commons/Header';

class GetDestination extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Destination" />
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={3}
          autoFocus={false}
          fetchDetails
          listViewDisplayed="auto"
          query={{
            key: 'AIzaSyBYadKYHnjTGjc9OqSj3DHWm9myop2B9Aw',
            language: 'id',
            types: 'geocode',
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          styles={styles}
        />
      </Container>
    );
  }
}

export default GetDestination;
