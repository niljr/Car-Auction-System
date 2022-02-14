// @flow
import React, { useEffect, useState } from 'react';
import { MdDashboard, MdStar, MdSettings } from 'react-icons/md';
import { useAppDispatch } from 'redux/hooks';
import DashboardScreen from './DashboardScreen';
import { setFlashNotification } from 'redux/modules/flashNotification';

export default function DashboardContainer(): JSX.Element {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const dashboardMenu = [{
        label: 'Home',
        onClick: () => {},
        icon: MdDashboard,
        key: 'dashboard'
    }, {
        label: 'Sell',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'My Page',
        onClick: () => {},
        icon: MdDashboard,
        key: 'charts'
    }, {
        label: 'Auction Kust',
        onClick: () => {},
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
        dashboardMenu={dashboardMenu}/>;
}
