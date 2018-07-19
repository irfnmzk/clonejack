import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Left, Button, Icon, Body, Right, Title,
} from 'native-base';
import styles from './styles/Header';

const Headers = ({ title, navigation }) => (
  <Header style={styles.Header}>
    <Left>
      <Button transparent onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Title>
        {title}
      </Title>
    </Body>
    <Right />
  </Header>
);

Headers.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Headers;
