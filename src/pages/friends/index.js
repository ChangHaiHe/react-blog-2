import React from 'react';

import './index.less';

import { Button, Checkbox, Form, Input } from 'antd';

const { useState } = React;

const Friends = () => {

  const [value, setValue] = useState()
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { TextArea } = Input;

  return (
    <div className='liutan'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ messageBoard: '' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item label="留言板" name="messageBoard" >
          <TextArea style={{ height: 200 }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            留言
          </Button>
        </Form.Item>
      </Form>


    </div >

  )
}

export default Friends;