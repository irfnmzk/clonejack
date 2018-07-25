import { StyleSheet } from 'react-native';
import { MAIN_BLUE } from '../../../configs/color';

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
    borderColor: MAIN_BLUE,
    borderWidth: 0.6,
    height: 50,
    backgroundColor: 'white',
  },
  MenuButtonText: {
    fontSize: 17,
    color: MAIN_BLUE,
    fontWeight: 'bold',
  },
  BookButton: {
    height: 50,
    backgroundColor: MAIN_BLUE,
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
    color: MAIN_BLUE,
  },
});
