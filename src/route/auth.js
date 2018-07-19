import { createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/authentication/MainScreen';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default navigator;
