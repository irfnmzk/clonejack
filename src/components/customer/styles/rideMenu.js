import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: 0,
    height: 160,
    width: '100%',
    paddingHorizontal: 10,
  },
  InfoContainer: {
    flex: 1,
    backgroundColor: 'white',
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  InfoItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoIcon: {
    color: '#1E5578',
    fontSize: 50,
  },
  InfoText: {
    color: '#1E5578',
    fontSize: 16,
    fontWeight: '600',
  },
  ButtonContainer: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    borderColor: 'grey',
    borderWidth: 0.2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContact: {
    backgroundColor: '#1E5578',
  },
  ButtonCancel: {
    backgroundColor: '#EDEDED',
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextContact: {
    color: 'white',
  },
  TextCancel: {
    color: 'orange',
  },
});
