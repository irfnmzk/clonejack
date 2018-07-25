import { StyleSheet } from 'react-native';

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
    backgroundColor: '#EDEDED',
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
    color: '#194364',
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
    color: '#194364',
    fontSize: 16,
    fontWeight: '600',
  },
  PickupCardTimer: {
    marginHorizontal: 10,
  },
  PickupCardTimerText: {
    color: '#194364',
    fontSize: 16,
    fontWeight: '800',
  },
});
