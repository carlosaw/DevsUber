import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';

import AppConfig from '../screens/AppConfig';

export default createDrawerNavigator({
    Home,
    AppConfig
}, {
    contentComponent:CustomDrawer
});