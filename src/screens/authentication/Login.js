import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
  Right,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import styles from './styles/Login';

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
    const { email, password } = this.state;
    console.log(email, password);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>
              {'Login'}
            </Title>
          </Body>
          <Right />
        </Header>
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
          <Button style={styles.LoginButton} block onPress={this.loginProcess}>
            <Text style={styles.LoginButtonText}>
              {'Login'}
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
};

export default Login;
