import React from 'react';
import { Calendar, Badge } from 'antd';
import AddToDo from './AddToDo';
import './index.css';

const listData =[
  {date:1,month:4, des:'This is usual event.'},
  {date:2,month:4, des:'This is usual event.'},
  {date:3,month:4, des:'This is usual event.'},
  {date:4,month:4, des:'This is usual event.'},
  {date:5,month:4, des:'This is usual event.'},
  {date:6,month:4, des:'This is usual event.'},
  {date:7,month:4, des:'This is usual event.'},
  {date:8,month:4, des:'This is usual event.'},
]

function getListData(value) {
  const data = []
  listData.forEach((item)=>{
    if(item.date === value.date() && item.month === value.month()+1){
      data.push(item)
    }
  })
  return data;
}

function dateCellRender(value) {
  const toData = getListData(value);
  return (
    <ul className="events">
      {toData.map(item => (
        <li key={item.des}>
          <Badge status="success" text={item.des} />
        </li>
      ))}
    </ul>
  );
}

export default function ToDoListCalendar(){
  
  const handleSubData = (value) => {
    console.log(value);
  }

  return(
    <>
      <AddToDo subData={handleSubData.bind(this)}/>
      <Calendar dateCellRender={dateCellRender} />
    </>
  )
} 