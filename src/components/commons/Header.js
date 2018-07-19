import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Left, Body, Right, Title,
} from 'native-base';
import BackButton from './BackButton';
import styles from './styles/Header';

const Headers = ({ title, navigation, sideBar }) => (
  <Header style={styles.Header}>
    <Left>
      {sideBar ? null : <BackButton navigation={navigation} />}
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
  sideBar: PropTypes.bool,
};

Headers.defaultProps = {
  sideBar: false,
};

export default Headers;
