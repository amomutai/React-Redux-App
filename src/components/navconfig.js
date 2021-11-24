
import React from 'react';
import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import settingsFill from '@iconify/icons-eva/settings-2-fill';


const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Photos',
    path: '/',
    icon: getIcon(shoppingBagFill),
    isActive: true
  },
  {
    title: 'Users',
    path: '/',
    icon: getIcon(peopleFill),
    isActive: false
  },
  {
    title: 'Settings',
    path: '/',
    icon: getIcon(settingsFill),
    isActive: false
  }
  
];

export default navConfig;
