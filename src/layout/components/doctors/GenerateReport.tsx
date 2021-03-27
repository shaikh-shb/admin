import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { history } from '../../../redux/store';
import GenerateReportForm from './GenerateReportForm';

const GenerateReport = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => setVisible(!visible);

    const closeModal = () => setVisible(false);

    const handleCheckCMDC = () => {
      history.push(`/vertical/generate-report`);
      closeModal();
    };



    return (
        <div className='add-patient'>
            <Button type='dashed' onClick={handleClick}>
                Generate Report
            </Button>
            <Modal
                visible={visible}
                footer={null}
                onCancel={closeModal}
                destroyOnClose
                title={<h3 className='title'>Generate Report</h3>}
            >
                <GenerateReportForm onCancel={closeModal} onSubmit={handleCheckCMDC} />
            </Modal>
        </div>
    );
};

export default GenerateReport;
