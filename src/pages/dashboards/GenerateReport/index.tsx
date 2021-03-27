import { Card } from 'antd';
import React from 'react';

import { usePageData } from '../../../hooks/usePage';

import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Generate Report',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Dashboards',
      route: 'default-dashboard'
    },
    {
      title: 'Generate Report'
    }
  ]
};

const MalPractice = () => {
  usePageData(pageData);

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <Card style={{ background: 'rgba(251, 251, 251)' }} className='animated with-shadow'>
            <div className='row'>
              <div className='col-12'>
                <h6 className='mt-0 mb-1'>There are 34 Dengue patients from this area.</h6>
                <h6 className='mt-0 mb-1'>There are 2 Hepatytus A patients from this area.</h6>
                <h6 className='mt-0 mb-1'>There are 53 Typhoid patients from this area.</h6>
                <h6 className='mt-0 mb-1'>There are 32 hypatytus C patients from this area.</h6>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </>
  );
};

export default MalPractice;
