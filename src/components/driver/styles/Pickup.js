import { StyleSheet } from 'react-native';
import { LIGHT_GREY, DARK_BLUE } from '../../../configs/color';

export default StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
  },
  PickupCard: {
    width: '95%',
    marginHorizontal: 20,
    backgroundColor: LIGHT_GREY,
    height: 80,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  PickupCardName: {
    flexDirection: 'row',
  },
  PickupCardIcon: {
    marginHorizontal: 10,
    color: DARK_BLUE,
    fontSize: 45,
  },
  PickupCardTextContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  PickupCardTextTitle: {
    color: 'green',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  PickupCardTextName: {
    color: DARK_BLUE,
    fontSize: 16,
    fontWeight: '600',
  },
  PickupCardTimer: {
    marginHorizontal: 10,
  },
  PickupCardTimerText: {
    color: DARK_BLUE,
    fontSize: 16,
    fontWeight: '800',
  },
  ButtonContainer: {
    padding: 15,
    backgroundColor: 'white',
    width: '95%',
  },
  Button: {
    backgroundColor: 'green',
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
