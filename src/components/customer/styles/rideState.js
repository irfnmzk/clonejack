import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    position: 'absolute',
    top: 65,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#1E5578',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
