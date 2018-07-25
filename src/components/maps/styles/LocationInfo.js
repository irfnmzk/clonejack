import { StyleSheet } from 'react-native';
import { MAIN_BLUE, LIGHT_GREY } from '../../../configs/color';

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
  InfoIconContainer: {},
  InfoIcon: {
    color: MAIN_BLUE,
    fontSize: 50,
    marginHorizontal: 10,
  },
  InfoTextContainer: {
    flex: 1,
    height: '100%',
    padding: 5,
    paddingTop: 10,
  },
  InfoTextTitle: {
    color: MAIN_BLUE,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  InfoText: {
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  ButtonContainer: {
    height: 60,
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
    backgroundColor: MAIN_BLUE,
  },
  ButtonCancel: {
    backgroundColor: LIGHT_GREY,
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
