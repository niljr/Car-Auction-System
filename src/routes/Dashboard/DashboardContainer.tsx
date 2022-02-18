// @flow
import React, { useEffect, useState } from 'react';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import DashboardScreen from './DashboardScreen';
import { setFlashNotification } from 'redux/modules/flashNotification';

export default function DashboardContainer(): JSX.Element {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        dispatch(setFlashNotification({
            message: 'LOGGED IN'
        }));

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return <DashboardScreen
        isLoading={isLoading}
        dashboardMenu={menu}/>;
}
