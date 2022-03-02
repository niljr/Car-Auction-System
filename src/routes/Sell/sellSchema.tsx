import * as yup from 'yup';

const schema = yup.object().shape({
    registered_year: yup.string().required('Registered Year is required'),
    manufacturer: yup.string().required('Manufacturer is required'),
    model: yup.string().required('Model is required'),
    grade: yup.string().required('Grade is required'),
    mileage: yup.string().required('Mileage is required'),
    color: yup.string().required('Color is required'),
    transmission: yup.string().required('Transmission is required'),
    wd: yup.string().required('WD is required'),
    engine_capacity: yup.string().required('Engine Capacity is required'),
    vin: yup.string().required('VIN is required'),
    registration_number: yup.string().required('Registration Number is required'),
    insurance_expiry_date: yup.string().required('Insurance Expiry Date is required'),
    vehicle_usage: yup.string().required('Vehicle Usage is required'),
    vehicle_features: yup.string().required('Vehicle Features is required'),
    start_price: yup.number().required('Start Price is required'),
    reserved_price: yup.string().required('Reserved Price is required'),
    remarks: yup.string().required('Remarks is required'),
    upload_photos: yup.string().required('Photo Usage is required')
});

export default schema;
