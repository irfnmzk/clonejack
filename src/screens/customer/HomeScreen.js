import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from 'native-base';
import MapView from 'react-native-maps';
import styles from './styles/HomeScreen';
import Header from '../../components/commons/Header';

class HomeScreen extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Let's Go" sideBar />
        <View style={styles.Container}>
          <MapView
            style={{ height: 535 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.00022,
              longitudeDelta: 0.0021,
            }}
          />
          <Button block full style={styles.BookButton} disabled>
            <Text style={styles.BookButtonText}>
              {'Book Now'}
            </Text>
          </Button>
        </View>
        <View style={styles.FloatingMenu} />
      </Container>
    );
  }
}

export default HomeScreen;
