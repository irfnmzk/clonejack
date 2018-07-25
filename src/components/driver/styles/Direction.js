import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    width: '100%',
    height: 80,
    borderTopColor: '#194364',
    borderTopWidth: 0.5,
    flexDirection: 'row',
  },
  IconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderRightColor: '#194364',
    borderRightWidth: 0.5,
  },
  Icon: {
    color: '#194364',
    fontSize: 60,
  },
  PlaceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  PlaceText: {
    color: '#194364',
    fontSize: 17,
    fontWeight: '600',
  },
});
