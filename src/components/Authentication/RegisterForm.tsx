import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Checkbox,Alert } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

function RegisterForm() {

    const history = useHistory();
    const [error, setError ] = React.useState("");

    const onFinish = (values: any) => {
        const confidential = {
            username : values.username,
            email : values.email,
            password : values.password
        }

        axios.post("signup",confidential)
            .then( res => {
                console.log(res.data)
                if(res.data.token===undefined){
                    setError(res.data.username[0]);
                }else{
                    localStorage.setItem("username",res.data.username);
                    localStorage.setItem("token",res.data.token);

                    history.push("/dashboard");
                }
            })
            .catch( err => {
                console.log(err.message);
            })
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
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

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                {
                    error.length > 0 &&
                    <Form.Item>
                        <Alert message={error} type="error"/>
                    </Form.Item>
                }
            </Form>
        </>
    )
}

export default RegisterForm;
