import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Icon } from 'native-base';
import styles from './styles/SideBar';
import { logout } from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(logout()),
});

class SideBar extends PureComponent {
  constructor() {
    super();

    this.route = [
      { key: 1, name: 'History', icon: { type: 'FontAwesome', name: 'history' } },
      { key: 2, name: 'Payment', icon: { type: 'Entypo', name: 'credit-card' } },
      { key: 3, name: 'Setting', icon: { type: 'Ionicons', name: 'md-settings' } },
      { key: 4, name: 'Logout', icon: { type: 'MaterialCommunityIcons', name: 'logout' } },
    ];

    this.navigateToScreen = this.navigateToScreen.bind(this);
  }

  navigateToScreen(location) {
    const { userLogout } = this.props;
    if (location === 'Logout') return userLogout();
    const { navigation } = this.props;
    return navigation.navigate(location);
  }

  renderMenuItem(route) {
    return (
      <TouchableOpacity
        style={styles.ItemMenuContainer}
        key={route.key}
        onPress={() => this.navigateToScreen(route.name)}
      >
        <Icon style={styles.IconMenu} {...route.icon} />
        <Text style={styles.ItemMenuText}>
          {route.name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Container style={styles.Container}>
        <View style={styles.ProfileContainer} />
        <View style={styles.MenuContainer}>
          {this.route.map(route => this.renderMenuItem(route))}
        </View>
      </Container>
    );
  }
}

SideBar.propTypes = {
  userLogout: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(SideBar);
