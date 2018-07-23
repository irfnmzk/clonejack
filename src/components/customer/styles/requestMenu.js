import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Contianer: {
    flex: 1,
    bottom: 160,
    justifyContent: 'space-between',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  MenuButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1E5578',
    borderWidth: 0.6,
    height: 50,
    backgroundColor: 'white',
  },
  MenuButtonText: {
    fontSize: 17,
    color: '#1E5578',
    fontWeight: 'bold',
  },
  BookButton: {
    height: 50,
    backgroundColor: '#1E5578',
    marginTop: 50,
  },
  BookButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  IconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    marginHorizontal: 10,
    color: '#1E5578',
  },
});
