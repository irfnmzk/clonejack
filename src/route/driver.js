import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Home from '../screens/driver/HomeScreen';
import History from '../screens/driver/History';

import SideBar from '../components/sidebar/SideBar';

const navigator = createDrawerNavigator(
  {
    Home,
    History,
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
  },
);

export default navigator;
