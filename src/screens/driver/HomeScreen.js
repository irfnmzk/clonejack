import React, { Component } from 'react';
import { Container } from 'native-base';
import Header from '../../components/commons/Header';

class HomeScreen extends Component {
  componentWillMount() {
    console.log('initial load');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title="Driver Home" />
      </Container>
    );
  }
}

export default HomeScreen;
