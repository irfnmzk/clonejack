import { StyleSheet } from 'react-native';
import { DARK_BLUE } from '../../../configs/color';

export default StyleSheet.create({
  Container: {
    position: 'absolute',
    top: 317,
    bottom: 0,
    right: 0,
    left: 163,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 90,
  },
  Circle: {
    height: 50,
    width: 50,
    backgroundColor: DARK_BLUE,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    color: 'white',
    fontSize: 40,
  },
  Line: {
    borderLeftWidth: 2,
    borderLeftColor: 'black',
    height: 20,
  },
  MiniCircle: {
    height: 15,
    width: 15,
    backgroundColor: DARK_BLUE,
    borderRadius: 30,
  },
});
