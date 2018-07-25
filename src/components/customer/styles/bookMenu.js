import { StyleSheet } from 'react-native';
import { MAIN_BLUE } from '../../../configs/color';

export default StyleSheet.create({
  Contianer: {
    flex: 1,
    bottom: 163,
    justifyContent: 'space-between',
  },
  BookButton: {
    height: 50,
    marginTop: 50,
    backgroundColor: MAIN_BLUE,
  },
  BookButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
