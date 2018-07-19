import { createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/authentication/MainScreen';
import Login from '../screens/authentication/Login';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Login,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default navigator;
