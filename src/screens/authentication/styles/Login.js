import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Header: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
  },
  Logo: {
    alignSelf: 'center',
    alignItems: 'center',
    top: 50,
    marginBottom: 150,
  },
  IconLogo: {
    color: '#1E5578',
    fontSize: 120,
  },
  TextLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E5578',
  },
  IconGrey: {
    color: 'grey',
  },
  InputSeparator: {
    marginBottom: 7,
    marginTop: 7,
  },
  LoginButton: {
    marginTop: 30,
    alignSelf: 'center',
    width: 300,
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ForgotPassword: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
