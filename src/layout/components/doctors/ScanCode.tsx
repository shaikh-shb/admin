import React  from 'react';

import { Button } from 'antd';
import { history } from '../../../redux/store';

const ScanCode = () => {
    const handleClick = () => {
      history.push('/vertical/doctors')
    };
    return (
        <div className='add-patient'>
            <Button type='default' onClick={handleClick}>
                Check registered doctors
            </Button>
        </div>
    );
};

export default ScanCode;
