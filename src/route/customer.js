import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Home from '../screens/customer/HomeScreen';
import GetDestination from '../screens/customer/GetDestination';

import SideBar from '../components/sidebar/SideBar';

const navigator = createDrawerNavigator(
  {
    Home,
    GetDestination,
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
  },
);

export default navigator;
