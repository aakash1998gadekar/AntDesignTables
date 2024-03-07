import { useEffect, useState } from 'react'

import './App.css'
import { Table } from 'antd';
import DynamicAlloc from './Components/DynamicAlloc';
import SelectRows from './Components/SelectRows';
import SortingFilter from './Components/SortingFilter';
import AddDelete from './Components/AddDelete';
import SearchFunc from './Components/SearchFunc';
import EditableTable from './Components/EditableTable';

import ExpandFunc from './Components/ExpandFunc';

function App() {
  // const [columns, setColumns] = useState([])

  // const [dataSource,setDataSource] =useState([]);

  // useEffect(()=>{
  //   fetch("https://dummyjson.com/quotes")
  //   .then((res) => res.json())
  //   .then((result)=>{
  //      const list = result.quotes || [];
  //      const firstObject = list[0] || {};
  //      const cols = [];
  //      for(const key in firstObject){
  //       const col={
  //         title: key,
  //         dataIndex: key,
  //       };
  //       cols.push(col);
  //      }
  //      setColumns(cols);
  //      setDataSource(result.quotes);
  //   });
  // },[])

  return (
    <div>
     <h1>Dynamic allocation of data</h1>
      <DynamicAlloc/> 
      <h1>Selecting Rows FOR TABLE</h1>
      <SelectRows/>
      <h1>Sorting feature FOR TABLE</h1>
    <SortingFilter/> 
    
    <h1>ADD-DELETE FUNCTIONALITY FOR TABLE</h1>
    <AddDelete/>
    <h1>SEARCH feature FOR TABLE</h1>
     <SearchFunc/>
     <h1>EDITABLE TABLE feature</h1>
    <EditableTable/>
    <h1>EXPAND FEATURES FOR TABLE</h1>
    <ExpandFunc/>
    </div>
  )
}

export default App
