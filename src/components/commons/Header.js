import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Left, Body, Right, Title,
} from 'native-base';
import BackButton from './BackButton';
import SidebarButton from './SidebarButton';
import styles from './styles/Header';

const Headers = ({
  title, navigation, sideBar, noGoback,
}) => (
  <Header style={styles.Header}>
    <Left>
      {!noGoback
        && (sideBar ? (
          <SidebarButton navigation={navigation} />
        ) : (
          <BackButton navigation={navigation} />
        ))}
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
  noGoback: PropTypes.bool,
};

Headers.defaultProps = {
  sideBar: false,
  noGoback: false,
};

export default Headers;
