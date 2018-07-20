import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from 'native-base';
import styles from './styles/HomeScreen';
import Maps from '../../components/maps/Maps';
import Header from '../../components/commons/Header';
import PickLocation from '../../components/maps/PickLocation';
// import GetDestination from '../../components/customer/GetDestination';

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
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Let's Go" sideBar />
        <View style={styles.Container}>
          <Maps />
          <Button block full style={styles.BookButton} disabled>
            <Text style={styles.BookButtonText}>
              {'Book Now'}
            </Text>
          </Button>
        </View>
        <PickLocation onPress={this.openDestinationSelect} />
        {/* <GetDestination /> */}
      </Container>
    );
  }
}

export default HomeScreen;
