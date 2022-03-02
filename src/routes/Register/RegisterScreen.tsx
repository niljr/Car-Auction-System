import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'components/base/Form';
import Typography from 'components/base/Typography';
import formStructure from './registerForm';
import schema from './registerSchema';
import './register.scss';

type Props = {
    onSubmit: (data: Object) => void,
    isProcessing: boolean
}

export default function RegisterScreen({ onSubmit, isProcessing }: Props): JSX.Element {
    return (
        <div className='register'>
            <div className='register__wrapper'>
                <Typography size={40} className='mb-5 text-center'>
                    {process.env.REACT_APP_SITE_TITLE}
                </Typography>
                <br/>
                <Link to='/login' className='register__headerLink'>Already have an account? Click here to login.</Link>
                <br/>
                <h1 className='register__header'>Register Your Account</h1>
                <br/>
                <Form
                    className='register__form'
                    isShowLabels={true}
                    structure={formStructure}
                    onSubmitForm={onSubmit}
                    schema={schema}
                    submitLabel='Proceed to Payment'
                    isProcessing={isProcessing} />
            </div>
        </div>
    );
}
