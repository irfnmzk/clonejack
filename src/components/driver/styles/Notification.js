import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    backgroundColor: '#0C4167',
    height: 400,
    paddingVertical: 30,
    alignItems: 'center',
  },
  Header: {
    backgroundColor: '#194364',
    height: 50,
    width: '100%',
    borderBottomColor: '#07283f',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  Icon: {
    color: 'white',
    fontSize: 100,
  },
  TimerContainer: {
    marginVertical: 10,
  },
  TimerText: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },
  AddressContainer: {
    width: 300,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddressText: {
    fontSize: 17,
    color: 'white',
    alignSelf: 'center',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  Button: {
    width: 120,
    height: 50,
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  ButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});
