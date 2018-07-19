import { createStackNavigator } from 'react-navigation';
import Home from '../screens/customer/HomeScreen';

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
