import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default function H5Menu(){
    const [current, setCurrent] = useState('all');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (<>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="all">
                <Link to='/home/h5/all'>黑名单</Link>
            </Menu.Item>
            <Menu.Item key="myArt">
                <Link to='/home/h5/all'>白名单</Link>
            </Menu.Item>
            {/*<Menu.Item key="myData">*/}
            {/*    <Link to='/home/h5/myData'>异常信息</Link>*/}
            {/*</Menu.Item>*/}
        </Menu>
    </>);
}
