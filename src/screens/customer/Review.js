import React, { PureComponent } from 'react';
import { Container, Icon, Textarea } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RatingStar from 'react-native-star-rating';
import styles from './styles/Review';
import Header from '../../components/commons/Header';
import { clearData } from '../../actions/customer';

const mapStateToProps = ({ customer }) => ({
  rideData: customer.ride,
});

const mapDispatchToProps = dispatch => ({
  clearDatas: () => dispatch(clearData()),
});

class Review extends PureComponent {
  constructor() {
    super();

    this.onSend = this.onSend.bind(this);
  }

  onSend() {
    const { navigation, clearDatas } = this.props;
    clearDatas();
    navigation.navigate('Home');
  }

  render() {
    const { rideData } = this.props;
    const { routeInfo, driver } = rideData;
    return (
      <Container>
        <Header title="Review" noGoback />
        <View style={styles.Container}>
          <View style={styles.PaymentContainer}>
            <Icon name="check" type="EvilIcons" style={styles.Icon} />
            <Text style={styles.PaymentThank}>
              {'Thanks for the Payment'}
            </Text>
            <Text style={styles.PaymentText}>
              {`Rp.${routeInfo.fare}`}
            </Text>
          </View>
          <View style={styles.ReviewContainer}>
            <Icon name="user" type="FontAwesome" style={[styles.Icon, { fontSize: 60 }]} />
            <Text style={styles.ReviewPerson}>
              {driver.name}
            </Text>
            <RatingStar maxStar={5} />
            <Textarea
              bordered
              placeholder="Enter Your FeedBack"
              rowSpan={5}
              style={styles.TextArea}
            />
          </View>
          <TouchableOpacity style={styles.Button} onPress={this.onSend}>
            <Text style={styles.ButtonText}>
              {'Send Review'}
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

Review.propTypes = {
  rideData: PropTypes.instanceOf(Object).isRequired,
  clearDatas: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Review);
