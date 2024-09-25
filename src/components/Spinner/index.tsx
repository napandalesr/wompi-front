import React from 'react';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './styles.less';

const Spinner = () => {
  return <section className='spinner'>
  <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
  </section>;
}

export default Spinner;