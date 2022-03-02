import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';

const Wrapper=styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 20px;
`
const Title=styled.h1`
text-align: center;
`
const Component = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Wrapper>
            <Title>注册</Title>

        <Form
            name="basic"
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 18,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                    {
                        min:4,
                        message:'最少4个字符'
                    },
                    {
                        max:10,
                        message:'最大10个字符'
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="确认密码"
                name="repassword"
                rules={[
                    {
                        required: true,
                        message: '两次密码必须一直!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次密码必须一致!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>



            <Form.Item
                wrapperCol={{
                    offset: 6,
                    span: 18,
                }}
            >
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
        </Wrapper>
    );
};
export default Component;
