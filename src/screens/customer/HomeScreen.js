import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Container } from 'native-base';
import { bindActionCreators } from 'redux';
import * as customerAction from '../../actions/customer';
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

const mapDispatchToProps = dispatch => bindActionCreators(customerAction, dispatch);

class HomeScreen extends Component {
  constructor() {
    super();

    this.openDestinationSelect = this.openDestinationSelect.bind(this);
    this.onBookPressed = this.onBookPressed.bind(this);
  }

  componentWillMount() {
    console.log('initial load');
  }

  onBookPressed() {
    const { toggleBookState } = this.props;
    toggleBookState();
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
        {isBooked ? (
          <RequestMenu />
        ) : (
          <BookMenu disable={isSelectedDest} onPress={this.onBookPressed} />
        )}
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  location: PropTypes.string,
  isSelectedDest: PropTypes.bool.isRequired,
  isBooked: PropTypes.bool.isRequired,
  toggleBookState: PropTypes.func.isRequired,
};

HomeScreen.defaultProps = {
  location: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
