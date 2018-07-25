import { StyleSheet } from 'react-native';
import { MAIN_BLUE } from '../../configs/color';

export default StyleSheet.create({
  DriverToggleContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  DriverToggleText: {
    fontSize: 20,
    color: MAIN_BLUE,
    fontWeight: 'bold',
  },
});
