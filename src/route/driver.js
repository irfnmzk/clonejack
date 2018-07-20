import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Home from '../screens/driver/HomeScreen';

import SideBar from '../components/sidebar/SideBar';

const navigator = createDrawerNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
  },
);

export default navigator;
