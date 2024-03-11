import { Table } from 'antd';
import React from 'react'

const Eample = ({ columns, data }) => {
    return <Table columns={columns} dataSource={data} />;
  };
  
  export default Eample;
