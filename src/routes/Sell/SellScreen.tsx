import CollapsibleSidebar from 'components/base/CollapsibleSidebar/CollapsibleSidebarContainer';
import React from 'react';
import { Menu } from 'types';

import Form from 'components/base/Form';
import formStructure from './sellForm';
import schema from './sellSchema';
import './sell.scss';
import Typography from 'components/base/Typography';

type Props = {
    menu: Array<Menu>
}

export default function SellScreen({ menu }: Props): JSX.Element {
    return (
        <div className='sell'>
            <CollapsibleSidebar menu={menu} />

            <div className='sell__content'>
                <Typography size={40} weight='bold'>Sell Your Car!</Typography>
                <Form
                    className='sell__content-form'
                    isShowLabels={true}
                    structure={formStructure}
                    onSubmitForm={() => {}}
                    schema={schema}
                    submitLabel='Submit for Inspection'
                    isProcessing={false} />
            </div>
        </div>
    );
}
