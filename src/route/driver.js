import { createStackNavigator } from 'react-navigation';
import Home from '../screens/driver/HomeScreen';

const navigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default navigator;
