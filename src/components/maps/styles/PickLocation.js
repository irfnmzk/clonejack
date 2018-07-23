import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  FloatingMenu: {
    width: 345,
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 15,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    marginBottom: 10,
    position: 'absolute',
  },
  FloatingMenuText: {
    color: 'grey',
    fontWeight: '200',
  },
  FloatingMenuLocation: {
    fontSize: 15,
    color: '#1E5578',
    fontWeight: '400',
  },
});
