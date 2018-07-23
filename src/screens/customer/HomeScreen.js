import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Container } from 'native-base';
import styles from './styles/HomeScreen';
import Maps from '../../components/maps/Maps';
import Header from '../../components/commons/Header';
import PickLocation from '../../components/maps/PickLocation';
import RequestMenu from '../../components/customer/requestMenu';
import BookMenu from '../../components/customer/bookMenu';

const mapStateToProps = ({ customer }) => ({
  isSelectedDest: customer.customerUi.destinationSelected,
  location: customer.ride.destination.description,
  isBooked: customer.customerUi.isBooked,
});

class HomeScreen extends Component {
  constructor() {
    super();

    this.openDestinationSelect = this.openDestinationSelect.bind(this);
  }

  componentWillMount() {
    console.log('initial load');
  }

  openDestinationSelect() {
    const { navigation } = this.props;
    navigation.navigate('GetDestination');
  }

  render() {
    const {
      navigation, location, isSelectedDest, isBooked,
    } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Let's Go" sideBar />
        <View style={styles.Container}>
          <Maps />
        </View>
        <PickLocation onPress={this.openDestinationSelect} location={location} />
        {isBooked ? <RequestMenu /> : <BookMenu disable={isSelectedDest} />}
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  location: PropTypes.string,
  isSelectedDest: PropTypes.bool.isRequired,
  isBooked: PropTypes.bool.isRequired,
};

HomeScreen.defaultProps = {
  location: null,
};

export default connect(mapStateToProps)(HomeScreen);
