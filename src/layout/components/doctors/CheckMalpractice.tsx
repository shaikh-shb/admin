import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { history } from '../../../redux/store';
import MalPracticeForm from './MalPracticeForm';

const CheckMalpractice = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => setVisible(!visible);

    const closeModal = () => setVisible(false);

    const handleCheckCMDC = () => {
      history.push(`/vertical/check-cmdc`);
      closeModal();
    };



    return (
        <div className='add-patient'>
            <Button type='dashed' onClick={handleClick}>
                Check malpractice
            </Button>
            <Modal
                visible={visible}
                footer={null}
                onCancel={closeModal}
                destroyOnClose
                title={<h3 className='title'>Check malpractice</h3>}
            >
                <MalPracticeForm onCancel={closeModal} onSubmit={handleCheckCMDC} />
            </Modal>
        </div>
    );
};

export default CheckMalpractice;
