import { Card } from 'antd';
import React from 'react';

import { usePageData } from '../../../hooks/usePage';

import { IPageData } from '../../../interfaces/page';

const pageData: IPageData = {
  title: 'Malpractice details',
  fulFilled: true,
  breadcrumbs: [
    {
      title: 'Dashboards',
      route: 'default-dashboard'
    },
    {
      title: 'Check CMDC'
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
                <h6 className='mt-0 mb-1'>Medicines</h6>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='count' style={{ fontSize: 14, color: '#336cfb', lineHeight: 1.4 }}>
                      Disprin
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    18%
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='count' style={{ fontSize: 14, color: '#336cfb', lineHeight: 1.4 }}>
                      Calpol
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    12%
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='count' style={{ fontSize: 14, color: '#336cfb', lineHeight: 1.4 }}>
                      Panadol
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    48%
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='count' style={{ fontSize: 14, color: '#336cfb', lineHeight: 1.4 }}>
                      Adderall
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    18%
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='count' style={{ fontSize: 14, color: '#336cfb', lineHeight: 1.4 }}>
                      Ativan
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    18%
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='count' style={{ fontSize: 14, color: '#336cfb', lineHeight: 1.4 }}>
                      Amitriptyline
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    18%
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </>
  );
};

export default MalPractice;
