import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {withRouter} from 'react-router-dom';
import './index.less';

const LoginIndex = (props) => {
    const onFinish = values => {
        console.log('Success:', values);
        props.history.push('/home');
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
            className="login"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div>
                用户登录
            </div>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form></>
    );
}
export const Login = withRouter(LoginIndex);
