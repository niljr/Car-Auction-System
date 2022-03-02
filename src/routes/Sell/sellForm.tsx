const form = [
    [
        { label: '1st Registered Year', placeholder: '1st Registered Year', name: 'registered_year', portion: 6, formControl: 'input' },
        {
            label: 'Manufacturer',
            placeholder: 'Manufacturer',
            name: 'manufacturer',
            portion: 6,
            formControl: 'select',
            options: [
                { value: 'Manufacturer1', label: 'Manufacturer1' }
            ]
        },
        { label: 'Model', placeholder: 'Model', name: 'model', portion: 6, formControl: 'input' },

        { label: 'Grade', placeholder: 'Grade', name: 'grade', portion: 6, formControl: 'input' },

        { label: 'Mileage', placeholder: 'Mileage', name: 'mileage', portion: 6, formControl: 'input' },

        { label: 'Color', placeholder: 'Color', name: 'color', portion: 6, formControl: 'input' },

        {
            label: 'Transmission',
            placeholder: 'Transmission',
            name: 'transmission',
            portion: 6,
            formControl: 'select',
            options: [
                { value: 'Transmission1', label: 'Transmission1' }
            ]
        },
        {
            label: '6WD/2WD',
            placeholder: '6WD/2WD',
            name: 'wd',
            portion: 6,
            formControl: 'select',
            options: [
                { value: '6WD/2D', label: '6WD/2D' }
            ]
        },

        { label: 'Engine Capacity', placeholder: 'Engine Capacity', name: 'engine_capacity', portion: 6, formControl: 'input' },

        { label: 'VIN', placeholder: 'VIN', name: 'vin', portion: 6, formControl: 'input' },

        { label: 'Registration No', placeholder: 'Registration No', name: 'registration_number', portion: 6, formControl: 'input' },

        { label: 'Insurance Expiry Date', placeholder: 'Insurance Expiry Date', name: 'insurance_expiry_date', portion: 6, formControl: 'input' },

        {
            label: 'Vehicle Usage',
            placeholder: 'Vehicle Usage',
            name: 'vehicle_usage',
            portion: 6,
            formControl: 'select',
            options: [
                { value: 'Vehicle Usage1', label: 'Vehicle Usage1' }
            ]
        },
        { label: 'Vehicle Features', placeholder: 'Vehicle Features', name: 'vehicle_features', portion: 6, formControl: 'input' },
        { label: 'Start Price', placeholder: 'Start Price', name: 'start_price', portion: 6, formControl: 'input' },
        { label: 'Reserved price', placeholder: 'Reserved price', name: 'reserved_price', portion: 6, formControl: 'input' },
        { label: 'Remarks', placeholder: 'Remarks', name: 'remarks', portion: 6, formControl: 'input' },
        { label: 'Upload Photos', placeholder: 'Upload Photos', name: 'reserved_price', portion: 6, formControl: 'file' }
    ]
];

export default form;
