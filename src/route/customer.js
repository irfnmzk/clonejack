import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Home from '../screens/customer/HomeScreen';
import GetDestination from '../screens/customer/GetDestination';
import Review from '../screens/customer/Review';

import SideBar from '../components/sidebar/SideBar';

const navigator = createDrawerNavigator(
  {
    Home,
    Review,
    GetDestination,
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
  },
);

export default navigator;
