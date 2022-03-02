// @flow
import React from 'react';
import CollapsibleSidebar from 'components/base/CollapsibleSidebar/CollapsibleSidebarContainer';
import NavBar from 'components/base/Navbar/Navbar';
import Typography from 'components/base/Typography/Typography';
import { Menu } from 'types';
import Calendar from 'react-calendar';
import './dashboard.scss';
import 'react-calendar/dist/Calendar.css';
// import Table from 'components/base/Table';

type Props = {
    dashboardMenu: Array<Menu>,
    isLoading: boolean
}

export default function DashboardScreen({ dashboardMenu }: Props): JSX.Element {
    return (
        <div className='dashboard'>

            <div className='dashboard__container'>
                <div className='dashboard__calendar-container'>
                    <div className='dashboard__calendar-container__calendar'>
                        <Calendar />
                    </div>
                    <Section title='Move to Line Auction' />
                </div>

                <div className='dashboard__content-container'>
                    <Section title='News (update of Caompaign, recent news in the AA, new model launch, regulation change, other automotive related news etc.)'/>
                    <Section title='Explanation: Overall flow of Auto Auction, How-to-sell/buy'/>
                    <Section title='How to Participate and Register to our Auto Auction'/>
                    <Section title='Membership Registration Page/Change Registration Information'/>
                </div>
            </div>
        </div>
    );
}

type sectionProps = {
    title: string
}

const Section = ({ title }: sectionProps) => {
    return (
        <div className='dashboard__section-container'>
            <div className='dashboard__section-container-title'>
                <Typography>{title}</Typography>
            </div>
        </div>
    );
};
