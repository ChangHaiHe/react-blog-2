import React, { useEffect } from 'react';
import './index.less';

import { Button, Checkbox, message, Form, Input } from 'antd';
import axios from 'axios';
const { useState } = React;

const isOnline = () => /changhai/g.test(window.location.host);

const Friends = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState()
  const [list, setList] = useState([]);
  const onFinish = (values) => {
    if (!values.messageBoard) {
      messageApi.open({
        type: 'warning',
        content: '请输入留言',
      });
      return;
    }

    const domain = isOnline() ? 'changhai.love' : '127.0.0.1';
    axios.get(`http://${domain}:3009/addComment?content=${values.messageBoard}`).then(res => {

      if (res?.data?.code == 0) {
        messageApi.open({
          type: 'success',
          content: '留言成功',
        });
        onSearch();
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const onReseat = () => {
    form.resetFields();
  }

  const onSearch = () => {
    const domain = isOnline() ? 'changhai.love' : '127.0.0.1';
    axios.get(`http://${domain}:3009/getCommentList`).then(res => {

      if (res?.data?.data) {
        setList(res.data.data || [])
      }
    })
  }


  const onDelete = (rowData) => {
    const domain = isOnline() ? 'changhai.love' : '127.0.0.1';
    axios.post(`http://${domain}:3009/deleteComment`, {
      id: rowData.id
    }).then(res => {
      onSearch();

      if (res?.data?.code === 0) {
        messageApi.open({
          type: 'success',
          content: '删除成功',
        });
      }

    })
  }

  const onEdit = rowData => {
    const formData = form.getFieldsValue();

    if (!formData.messageBoard) {
      messageApi.open({
        type: 'warning',
        content: '请输入留言',
      });
      return;
    }

    const domain = isOnline() ? 'changhai.love' : '127.0.0.1';
    axios.post(`http://${domain}:3009/updateComment`, {
      id: rowData.id,
      content: formData.messageBoard,
    }).then(res => {
      onSearch();
      if (res?.data?.code === 0) {
        messageApi.open({
          type: 'success',
          content: '修改成功',
        });
      }
    })
  }

  const { TextArea } = Input;
  useEffect(() => {
    onSearch()
  }, [])

  return (
    <div className='liutan'>
      {contextHolder}
      <Form
        form={form}
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
          <Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>
            留言
          </Button>
          <Button onClick={onReseat} style={{ marginRight: '20px' }}>
            青空
          </Button>
        </Form.Item>

        <Form.Item label=" " colon={false}>
          {
            list.map((item, index) => {
              return (
                <div className='comment-item' key={item.id}>
                  <Form.Item label={`${index + 1}楼`}>
                    {item.content}
                  </Form.Item>
                  <span>
                    <a onClick={() => onEdit(item)} style={{ marginRight: '10px' }}>修改</a>
                    <a onClick={() => onDelete(item)} >删除</a>

                  </span>
                </div>
              )
            })
          }
        </Form.Item>
      </Form>
    </div >
  )
}

export default Friends;