import React from 'react';

import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { hasErrorFactory } from '../../../utils/hasError';

import { IPatient } from '../../../interfaces/patient';

type Props = {
  onSubmit: (patient: IPatient) => void;
  onCancel: () => void;
  patient?: IPatient;
  submitText?: string;
};

const defaultSubmitText = 'Add new doctor';
const emptyPatient = {
  name: null,
  address: null,
  status: null,
  age: null,
  number: null,
  gender: null,
  img: null,
  cmdc: null
};

const patientScheme = Yup.object({
  cmdc: Yup.string().required()
});

const MalPracticeForm = ({
  submitText = defaultSubmitText,
  patient = emptyPatient,
  onSubmit,
  onCancel
}: Props) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
    touched,
    values,
    errors,
    isValid
  } = useFormik<IPatient>({
    validationSchema: patientScheme,
    initialValues: patient,
    onSubmit: (values) => {
      onSubmit(values);
      onCancel();
    }
  });

  const hasError = hasErrorFactory(touched, errors);

  const handleCancel = () => {
    resetForm();
    onCancel();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <Input
            placeholder='Enter CMDC number'
            name='cmdc'
            type='text'
            onBlur={handleBlur}
            onChange={handleChange}
            defaultValue={values.cmdc}
            className={hasError('cmdc')}
          />
        </div>

        <div className='d-flex justify-content-between buttons-list settings-actions'>
          <Button danger onClick={handleCancel}>
            Cancel
          </Button>

          <Button disabled={!isValid} type='primary' htmlType='submit'>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default MalPracticeForm;
