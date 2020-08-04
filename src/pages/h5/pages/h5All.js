import React from 'react';
// import SearchBar from "../components/searchBar";
import { Table, Button } from 'antd';
import './h5.css';

// const data = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['loser'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sidney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ];
const data = [
    {
        id: 1,
        user: 2221123133,
        time:'2019/11/11 下午3:47:56',
        normal: '正常',
        black: '否',
        action: '加入黑名单'
    },{
        id: 2,
        user: 3221123129,
        time:'2019/11/11 下午3:48:56',
        normal: '正常',
        black: '否',
        action: '加入黑名单'
    }
];

const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: text => <span>{text}</span>,
    },
    {
        title: '用户',
        dataIndex: 'user',
        key: 'user',
        render: text => <span>{text}</span>,
    },
    // {
    //     title: '时间',
    //     dataIndex: 'time',
    //     key: 'time',
    //     render: text => <span>{text}</span>,
    // },
    {
        title: '是否正常',
        dataIndex: 'normal',
        key: 'normal',
        render: text => <span>{'正常'}</span>,
    },
    // {
    //     title: '是否加入黑名单',
    //     dataIndex: 'black',
    //     key: 'black',
    //     render: text => <span>{text}</span>,
    // },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: text => <Button>{'移出白名单'}</Button>,
    },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </span>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <span>
    //       <span style={{ marginRight: 16 }}>Invite {record.name}</span>
    //       <span>Delete</span>
    //     </span>
    //   ),
    // },
  ];

export default function H5All(){
    return(
        <div>
            {/*<SearchBar />*/}
            <Table columns={columns} dataSource={data} className="H5-table"/>
        </div>
    )
}
