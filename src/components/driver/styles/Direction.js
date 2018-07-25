import { StyleSheet } from 'react-native';
import { DARK_BLUE } from '../../../configs/color';

export default StyleSheet.create({
  Container: {
    width: '100%',
    height: 80,
    borderTopColor: DARK_BLUE,
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderRightColor: DARK_BLUE,
    borderRightWidth: 0.5,
  },
  Icon: {
    color: DARK_BLUE,
    fontSize: 60,
  },
  PlaceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  PlaceText: {
    color: DARK_BLUE,
    fontSize: 17,
    fontWeight: '600',
  },
});
