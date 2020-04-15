import React from 'react';
import { Card } from 'antd';
import ToDoListCalendar from '../../component/ToDoList/ToDoListCalendar';
import BasicToDoList from '../../component/ToDoList/BasicToDoList';

export default function Index() {
    return (
        <div>
            <Card
                style={{margin:10}}
                title = "日历"
                hoverable>
                <ToDoListCalendar />
            </Card>
            <Card
                style={{margin:10}}
                title = "待办事项"
                hoverable>
                <BasicToDoList />
            </Card>
        </div>
    )
}
