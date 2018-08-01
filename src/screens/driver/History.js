import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Container, Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles/History';
import Header from '../../components/commons/Header';

class History extends PureComponent {
  componentWillMount() {
    console.log('initializing');
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header title="Trip History" navigation={navigation} sideBar />
        <View style={styles.Container}>
          <View style={styles.CardContainer}>
            <View style={styles.PassengerContainer}>
              <Icon style={styles.PassengerIcon} name="user" type="FontAwesome" />
              <Text style={styles.PassengerText}>
                {'Irfan'}
              </Text>
            </View>
            <View style={styles.DetailContainer}>
              <View style={styles.DetailDirection}>
                <View style={styles.DetailIconContainer}>
                  <Icon name="location-pin" type="Entypo" style={styles.DetailIcon} />
                  <Icon name="dots-three-vertical" type="Entypo" style={styles.DetailIcon} />
                  <Icon
                    name="primitive-dot"
                    type="Octicons"
                    style={[styles.DetailIcon, styles.SpecialIcon]}
                  />
                </View>
                <View style={styles.DetailPlace}>
                  <Text style={styles.place}>
                    {'Jalan bangkong'}
                  </Text>
                  <Text style={styles.place}>
                    {'Jalan bangkong 2'}
                  </Text>
                </View>
              </View>
              <View style={styles.DetailPrice}>
                <Text style={styles.Price}>
                  {'Rp. 200000'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect()(History);
