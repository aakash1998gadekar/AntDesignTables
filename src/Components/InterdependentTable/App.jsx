import React from 'react';
import InterdependentTable from './InterdependentTable';

const AppExample = () => {
  const data = [
    { key: '1', value1: 10, value2: 20 },
    { key: '2', value1: 15, value2: 25 },
    { key: '3', value1: 30, value2: 35 },
  ];

  return <InterdependentTable data={data} />;
};

export default AppExample;
