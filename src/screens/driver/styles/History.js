import { StyleSheet } from 'react-native';
import { LIGHT_GREY, MAIN_BLUE, DARK_PURPLE } from '../../../configs/color';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: LIGHT_GREY,
    paddingTop: 20,

    paddingHorizontal: 20,
  },
  CardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    height: 130,
    borderRadius: 5,
    shadowOffset: { width: 0.1, height: 0.1 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  PassengerContainer: {
    height: '100%',
    backgroundColor: MAIN_BLUE,
    width: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PassengerIcon: {
    color: 'white',
    fontSize: 70,
  },
  PassengerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  DetailContainer: {
    padding: 10,
    flex: 1,
  },
  DetailIcon: {
    color: DARK_PURPLE,
    fontSize: 22,
  },
  SpecialIcon: {
    left: 5,
  },
  DetailDirection: {
    flexDirection: 'row',
  },
  place: {
    color: MAIN_BLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  DetailIconContainer: {},
  DetailPlace: {
    flex: 1,
    justifyContent: 'space-between',

    paddingVertical: 5,
  },
  DetailPrice: {
    justifyContent: 'center',
    flex: 1,
  },
  Price: {
    color: MAIN_BLUE,
    fontSize: 21,
    fontWeight: '800',
    marginTop: 10,
  },
});
