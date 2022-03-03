import CollapsibleSidebar from 'components/base/CollapsibleSidebar';
import Table from 'components/base/Table';
import Typography from 'components/base/Typography';
import React from 'react';
import { Menu } from 'types';
import './auction-list.scss';

type Props = {
    // TODO add props here
    menu: Array<Menu>,
    tableHeader: any,
    carList: any
}

export default function AuctionListScreen({ menu, tableHeader, carList }: Props): JSX.Element {
    return (
        <div className='auction-list'>
            <CollapsibleSidebar menu={menu} />

            <div className='auction-list__content'>
                <Typography size={40} weight='bold'>Auction List</Typography>

                <Table
                    isHover={true}
                    headers={tableHeader}
                    list={carList} />

            </div>
        </div>
    );
}
