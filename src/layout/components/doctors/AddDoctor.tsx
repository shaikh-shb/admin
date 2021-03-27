import React, { useState } from 'react';

import { Button, Modal } from 'antd';

import DoctorForm from './DoctorForm';
import { usePatients } from '../../../hooks/usePatients';

import { IPatient } from '../../../interfaces/patient';

const AddDoctor = () => {
  const { addPatient } = usePatients();
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  const closeModal = () => setVisible(false);

  const handleAddPatient = (patient: IPatient) => {
    addPatient(patient);
    closeModal();
  };

  return (
    <div className='add-patient'>
      <Button type='primary' onClick={handleClick}>
        <span className='icofont icofont-plus mr-2' style={{ fontSize: '1.3em' }} />
        Add new doctor
      </Button>
      <Modal
        visible={visible}
        footer={null}
        onCancel={closeModal}
        destroyOnClose
        title={<h3 className='title'>Add new doctor</h3>}
      >
        <DoctorForm onCancel={closeModal} onSubmit={handleAddPatient} />
      </Modal>
    </div>
  );
};

export default AddDoctor;
