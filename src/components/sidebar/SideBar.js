import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Container, Icon } from 'native-base';
import styles from './styles/SideBar';

class SideBar extends PureComponent {
  constructor() {
    super();

    this.route = [
      { key: 1, name: 'History', icon: { type: 'FontAwesome', name: 'history' } },
      { key: 2, name: 'Payment', icon: { type: 'Entypo', name: 'credit-card' } },
      { key: 3, name: 'Setting', icon: { type: 'Ionicons', name: 'md-settings' } },
      { key: 4, name: 'Logout', icon: { type: 'MaterialCommunityIcons', name: 'logout' } },
    ];
  }

  renderMenuItem(route) {
    return (
      <View style={styles.ItemMenuContainer} key={route.key}>
        <Icon style={styles.IconMenu} {...route.icon} />
        <Text style={styles.ItemMenuText}>
          {route.name}
        </Text>
      </View>
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

export default SideBar;
