import React from 'react';
import { Form, Input } from 'antd';
import Button from '../../../components/button/button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return ( 
        <>
            <div className="auth__top">
                <h2 className="auth__title">Войти в аккаунт</h2>
                <p className="auth__text">Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    hasFeedback 
                    validateStatus="success"
                >
                    <Input placeholder="Username" size="large" id="success"/>
                </Form.Item>
                <Form.Item
                    name="password"
                >
                    <Input
                        type="password"
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Button 
                        className="button__large" 
                        type="primary"
                    >
                        Войти в аккаунт
                    </Button>
                </Form.Item>
                <Link to="/register" className="auth__register-link">Зарегистрироваться</Link>
            </Form>
        </>
    );
}
 
export default LoginForm;