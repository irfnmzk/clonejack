import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Button } from 'native-base';
// import styles from './styles/GetDestination';
import Header from '../../components/commons/Header';

class GetDestination extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Let's Go" sideBar />
      </Container>
    );
  }
}

export default GetDestination;
