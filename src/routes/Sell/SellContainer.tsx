import React from 'react';
import SellScreen from './SellScreen';

import { MdDashboard, MdSettings } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

export default function SellContainer(): JSX.Element {
    const history = useHistory();

    const menu = [{
        label: 'Home',
        onClick: () => { history.push('/dashboard'); },
        icon: MdDashboard,
        key: 'dashboard'
    }, {
        label: 'Sell',
        onClick: () => { history.push('/sell'); },
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'My Page',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Auction List',
        onClick: () => { history.push('/auction-list'); },
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Sequence AA',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Random AA',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Market Price',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Transportation',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'F & I',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Account',
        icon: MdSettings,
        key: 'settings',
        subMenu: [{
            key: 'one',
            label: 'Information'
        }, {
            key: 'two',
            label: 'Password'
        }, {
            key: 'three',
            label: 'Logout'
        }]
    }];

    return <SellScreen menu={menu} />;
}
