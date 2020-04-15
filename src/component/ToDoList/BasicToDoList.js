import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <span style={{ marginRight: 16 }}>Invite {record.name}</span>
          <span>Delete</span>
        </span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

export default function BasicToDoList(){
    return (<Table columns={columns} dataSource={data} />)
}