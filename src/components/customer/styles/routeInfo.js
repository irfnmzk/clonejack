import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    height: 230,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  Header: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    height: 50,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  Body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BodyItem: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    color: '#1E5679',
    fontSize: 50,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  Footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E5679',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FooterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  BodyItemTextHeader: {
    color: 'grey',
    marginBottom: 5,
    fontSize: 17,
    fontWeight: '600',
  },
  BodyItemTextContent: {
    color: '#1E5679',
    fontSize: 16,
  },
});
