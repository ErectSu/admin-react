import React,{useState, useEffect} from 'react';
import { Drawer, Form, Button, Col, Row, Input, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css';

export default function AddTodo(props){
    const [visible, setVisible] = useState(false);
    const [data,setData] = useState(null);

    useEffect(()=>{
        setData({
            date: '',
            des: ''
        })
    },[])

    const showDrawer = () => {
        setVisible(true);
    };
    
    const onClose = () => {
        setVisible(false);
    };

    const onSubmit = () => {
        props.subData(data);
        setData({
            date: '',
            des: ''
        });
        setVisible(false);    
    }
    const handleChange = (date, des) => {
        setData({
            date: date,
            des: des
        })
    }
    return (
        <>
        <Button type="primary" onClick={showDrawer}>
          <PlusOutlined /> 新增事项
        </Button>
        <Drawer
          title="创建事项"
          width={360}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={onClose}
                style={{ marginRight: 8 }}
              >
                取消
              </Button>
              <Button onClick={onSubmit} type="primary">
                提交
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="dateTime"
                  label="时间"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    onChange = {(value,formatString) => (handleChange(formatString,data.des))}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="事项"
                  rules={[
                    {
                      required: true,
                      message: 'please enter description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} 
                  placeholder="please enter description" 
                  onChange={({ target: { value } })=>(handleChange(data.date,value))}/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
        </>
    )
}
