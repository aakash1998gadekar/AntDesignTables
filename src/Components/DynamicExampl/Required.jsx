import React from 'react';

import { Button } from 'antd';
import Eample from './Eample';

const Required = () => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
  ];

  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Doe', age: 40 },
    { id: 3, name: 'Jane', age: 25 },
  ];

  return (
    <div>
      <Eample columns={columns} data={data} />
      <Button type="primary">Add Row</Button> {/* Example of adding a row */}
    </div>
  );
};

export default Required;

