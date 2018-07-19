import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Container, Button, Icon, Form, Item, Label, Input,
} from 'native-base';
import Headers from '../../components/commons/Header';
import styles from './styles/Login';
import * as authActions from '../../actions/auth';

const mapStateToProps = ({ loading }) => ({
  loading: loading.loginLoading,
});
const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.loginProcess = this.loginProcess.bind(this);
  }

  loginProcess() {
    const { processLogin } = this.props;
    processLogin(this.state).catch((message) => {
      Alert.alert(message);
    });
  }

  render() {
    const { navigation, loading } = this.props;
    return (
      <Container>
        <Headers navigation={navigation} title="Login" />
        <View style={styles.Logo}>
          <Icon name="motorcycle" type="FontAwesome" style={styles.IconLogo} />
          <Text style={styles.TextLogo}>
            {'CloneJack'}
          </Text>
        </View>
        <View>
          <Form>
            <Item inlineLabel>
              <Label>
                <Icon name="email" type="MaterialIcons" style={styles.IconGrey} />
              </Label>
              <Input
                placeholder="Email"
                placeholderTextColor="grey"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <View style={styles.InputSeparator} />
            <Item inlineLabel>
              <Label>
                <Icon name="lock" type="Foundation" style={styles.IconGrey} />
              </Label>
              <Input
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <Button style={styles.LoginButton} block onPress={this.loginProcess} disabled={loading}>
            <Text style={styles.LoginButtonText}>
              {loading ? 'Its Working...' : 'Login'}
            </Text>
          </Button>
          <Text style={styles.ForgotPassword}>
            {'Forgot Password'}
          </Text>
        </View>
      </Container>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  processLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
