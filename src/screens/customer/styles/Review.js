import { StyleSheet } from 'react-native';
import { MAIN_BLUE } from '../../../configs/color';

export default StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  PaymentContainer: {
    borderColor: '#d8c0c0',
    borderWidth: 2,
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    fontSize: 100,
    color: MAIN_BLUE,
  },
  PaymentThank: {
    color: MAIN_BLUE,
    fontSize: 20,
  },
  PaymentText: {
    color: MAIN_BLUE,
    fontSize: 30,
    fontWeight: '800',
  },
  Button: {
    width: '100%',
    backgroundColor: MAIN_BLUE,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  ReviewContainer: {
    width: '100%',
    alignItems: 'center',
  },
  TextArea: {
    width: 300,
    marginTop: 10,
  },
  ReviewPerson: {
    color: MAIN_BLUE,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
});
