import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'components/base/Form';
import Typography from 'components/base/Typography';
import formStructure from './registerPaymentForm';
import schema from './registerPaymentSchema';
import './register-payment.scss';

type Props = {
    onSubmit: (data: Object) => void,
    isProcessing: boolean
}

export default function RegisterPaymentScreen({ onSubmit, isProcessing }: Props): JSX.Element {
    return (
        <div className='register-payment'>
            <div className='register-payment__wrapper'>
                <Typography size={40} className='mb-5 text-center'>
                    {process.env.REACT_APP_SITE_TITLE}
                </Typography>
                <h1 className='register-payment__header'>Payment</h1>
                <br/>
                <Form
                    className='register-payment__form'
                    isShowLabels={true}
                    structure={formStructure}
                    onSubmitForm={onSubmit}
                    schema={schema}
                    submitLabel='Register Account'
                    isProcessing={isProcessing} />
            </div>
        </div>
    );
}
