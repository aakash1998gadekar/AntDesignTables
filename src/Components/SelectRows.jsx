import { Table, Tag } from 'antd'
import React, { useState } from 'react'

const SelectRows = () => {

    //for autoselecting some of the rows
    const [autoSelectedRows,setAlreadySelctedRows]=useState(['1','3'])

    const columns = [
        {
            title: "Student Id",
            dataIndex: 'id'
        },
        {
            title: "Name",
            dataIndex: 'name'
        },
        {
            title: "Grade",
            dataIndex: 'grade',
            //Adding colors to tag ,tag is inbuilt functionality in aAnt design
            render:(tag)=>{
                const color = tag.includes('A')?'Green':tag.includes('B')?"blue":"red"
                return <Tag color={color} key={tag}>{tag}</Tag>
            }
        }
    ]

    const dataSource=[
        {
            key:'1',
            id:'1',
            name:'name1',
            grade:'A'
        },
        {
            key:'2',
            id:'2',
            name:'name12',
            grade:'B'
        },
        {
            key:'3',
            id:'3',
            name:'name13',
            grade:'A'
        },
        {
            key:'4',
            id:'4',
            name:'name14',
            grade:'C'
        },
        {
            key:'5',
            id:'5',
            name:'name15',
            grade:'D'
        },
    ]
  return (
    <div className='App'>
        <header className='App-header'>
            <Table
            columns={columns}
            dataSource={dataSource}
            //for selecting rows
            rowSelection={{
                type:'checkbox',
                selectedRowKeys:autoSelectedRows,
                onChange:(keys)=>{
                    setAlreadySelctedRows(keys)
                },
                onSelect:(record)=>{
                    console.log({record})
                },
                //for disabling one of the checkbox
                getCheckboxProps:(record)=>({
                    disabled:record.grade === 'C'
                }),
                //for hiding select all from column
                // hideSelectAll:true,

                selections:[
                    Table.SELECTION_NONE,
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    {
                        key:'even',
                        text:'Select Even Rows',
                        onSelect:(allKeys)=>{
                            const selectedKeys=allKeys.filter(key=>{
                                return key%2==0
                            })
                            setAlreadySelctedRows(selectedKeys)
                        }
                        },
                        {
                            key:'excellent',
                            text:'Excellent Grades',
                            onSelect:(allKeys)=>{
                                const selectedKeys=allKeys.filter(key=>{
                                    const isExcellent=dataSource.find(student=>{
                                    return student.key==key && student.grade.includes('A')
                                })
                                return isExcellent;
                            })
                                setAlreadySelctedRows(selectedKeys)
                            }
                            }
                ]
            }}
            >

            </Table>
        </header>
      
    </div>
  )
}

export default SelectRows
