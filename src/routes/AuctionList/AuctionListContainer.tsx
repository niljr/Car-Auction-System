import React from 'react';
import { MdDashboard, MdStar, MdSettings } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import Button from 'components/base/Button';
import AuctionListScreen from './AuctionListScreen';

export default function AuctionListContainer({ }): JSX.Element {
    const history = useHistory();

    const goToPageUnit = () => {
        history.push('/auction-unit');
    };

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

    const tableHeader = [
        { key: 'lot_no', label: 'Lot No.' },
        { key: 'due_date', label: 'Due Date' },
        { key: 'location', label: 'Location' },
        { key: 'photo', label: 'Photo' },
        { key: 'brand', label: 'Brand' },
        { key: 'model', label: 'Model' },
        { key: 'grade', label: 'Grade' },
        { key: 'year', label: 'Year' },
        { key: 'fuel', label: 'Fuel' },
        { key: 'color', label: 'Color' },
        { key: 'inspection_grade', label: 'Inspection Grade' },
        { key: 'starting_price', label: 'Starting Price' },
        { key: 'current_price', label: 'Current Price' },
        { key: 'bid', label: 'Bid' },
        { key: 'number_bids', label: 'No. of Bids' }
    ];

    const carList = [
        {
            id: 1,
            lot_no: 'R105598',
            due_date: '2019/10/25',
            location: '2020/Bangna',
            photo: <Image src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*' width={80} height={80}/>,
            brand: 'Toyota',
            model: 'Rav4',
            grade: 'G',
            year: '2016',
            fuel: '98,400',
            color: 'White',
            inspection_grade: 'B',
            starting_price: 'P 1,700,000.00',
            current_price: 'P 1,710,000.00',
            bid: <Button onClick={goToPageUnit} label='bid'/>,
            number_bids: 6
        },
        {
            id: 2,
            lot_no: 'R10559',
            due_date: '2019/10/25',
            location: '2020/Bangna',
            photo: <Image src='https://www.cnet.com/a/img/CSTqzAl5wJ57HHyASLD-a0vS2O0=/940x528/2021/04/05/9e065d90-51f2-46c5-bd3a-416fd4983c1a/elantra-1080p.jpg' width={80} height={80}/>,
            brand: 'Toyota',
            model: 'Rav4',
            grade: 'G',
            year: '2016',
            fuel: '98,400',
            color: 'White',
            inspection_grade: 'B',
            starting_price: 'P 1,700,000.00',
            current_price: 'P 1,710,000.00',
            bid: <Button onClick={goToPageUnit} label='bid'/>,
            number_bids: 6
        },
        {
            id: 3,
            lot_no: 'R10557',
            due_date: '2019/10/25',
            location: '2020/Bangna',
            photo: <Image src='https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E=' width={80} height={80}/>,
            brand: 'Toyota',
            model: 'Rav4',
            grade: 'G',
            year: '2016',
            fuel: '98,400',
            color: 'White',
            inspection_grade: 'B',
            starting_price: 'P 1,700,000.00',
            current_price: 'P 1,710,000.00',
            bid: <Button onClick={goToPageUnit} label='bid'/>,
            number_bids: 6
        }
    ];

    const ranNum = Math.floor(Math.random() * carList.length);

    const userCarList = [];

    userCarList.push(carList[ranNum]);

    return <AuctionListScreen
        menu={menu}
        tableHeader={tableHeader}
        carList={userCarList}/>;
}
