import { StyleSheet } from 'react-native';
import { MAIN_BLUE } from '../../../configs/color';

export default StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
  },
  CardContainer: {
    backgroundColor: 'white',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  CardTextDetail: {
    color: MAIN_BLUE,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  CardTextPrice: {
    color: 'green',
    fontSize: 16,
  },
  Button: {
    width: 100,
  },
  ButtonContainer: {
    color: 'white',
    fontSize: 16,
  },
});
