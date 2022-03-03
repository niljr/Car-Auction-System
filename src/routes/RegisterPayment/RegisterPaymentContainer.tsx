import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import RegisterPaymentScreen from './RegisterPaymentScreen';
import { authUser } from '../../redux/modules/authentication';
import { setFlashNotification } from '../../redux/modules/flashNotification';

export default function RegisterPaymentContainer(): JSX.Element {
    const dispatch = useAppDispatch();
    const history = useHistory();

    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit = (data: Object) => {
        setIsProcessing(true);

        try {
            // TODO:
            // call api to authenticate user and redirect to dashboard

            setTimeout(() => {
                setIsProcessing(false);
                dispatch(authUser(data));
                history.replace('/registerPayment');
            }, 500);
        } catch (err) {
            dispatch(setFlashNotification({
                message: 'ERROR',
                isError: true
            }));
        }
    };

    return <RegisterPaymentScreen
        onSubmit={onSubmit}
        isProcessing={isProcessing} />;
}
