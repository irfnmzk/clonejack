import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ProfileContainer: {
    height: 260,
    backgroundColor: '#0D3953',
  },
  MenuContainer: {
    backgroundColor: '#1F5679',
    flex: 1,
  },
  ItemMenuContainer: {
    height: 50,
    borderBottomColor: '#0D3953',
    borderBottomWidth: 1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemMenuText: {
    fontSize: 17,
    color: 'white',
  },
  IconMenu: {
    color: 'white',
    marginRight: 20,
  },
});
