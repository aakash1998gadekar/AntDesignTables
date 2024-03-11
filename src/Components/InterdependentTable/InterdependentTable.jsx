import React from 'react';
import { Table } from 'antd';

const InterdependentTable = ({ data }) => {
  const columns = [
    {
      title: 'Value 1',
      dataIndex: 'value1',
      key: 'value1',
    },
    {
      title: 'Value 2',
      dataIndex: 'value2',
      key: 'value2',
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => {
        const total = record.value1 + record.value2; // Perform any calculation based on the values of other columns
        return <span>{total}</span>;
      },
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default InterdependentTable;
