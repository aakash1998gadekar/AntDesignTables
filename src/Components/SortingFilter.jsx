import { Table } from 'antd';
import React, { useEffect, useState } from 'react'

const SortingFilter = () => {
    const [dataSource, setDataSource] = useState([]);

  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1)
  const [pageSize,setPageSize]=useState(20)

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then(data=>{
        setDataSource(data)
    }).catch(err=>{
        console.log(err)
    }).finally(()=>{
        setLoading(false)
    })
  }, []);
  const columns = [
    {
    
      key: "1",
      title:"ID",
      dataIndex: "id",
    },
    {
    
        key: "2",
        title:"USER ID",
        dataIndex: "userId",
        sorter:(record1,record2)=>{
            return record1.userId > record2.userId
        }
      },
      {
    
        key: "3",
        title:"Status",
        dataIndex: "completed",
        render:(completed)=>{
            return <p>{completed?'Complete':'In Progress'}</p>
        },
        filters:[
            {text:'Complete',value:true},
            {text:'In Progress',value:false}
        ],
        onFilter:(value,record)=>{
           return record.completed === value
        }
      },
  ];

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
            current:page,
            pageSize:pageSize,
            onChange:(page,pageSize)=>{
                setPage(page);
                setPageSize(pageSize)
            }
        }}
      ></Table>
    </div>
  )
}

export default SortingFilter
