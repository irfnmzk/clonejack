import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from 'native-base';
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
          <View style={{ height: 535, backgroundColor: 'red' }} />
          <Button block full style={styles.BookButton} disabled>
            <Text style={styles.BookButtonText}>
              {'Book Now'}
            </Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
