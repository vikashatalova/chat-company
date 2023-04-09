import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button';
import { ExclamationCircleTwoTone} from '@ant-design/icons';

const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const sucess = false;
    return ( 
        <>
            <div className="auth__top">
                <h2 className="auth__title">Регистрация</h2>
                <p className="auth__text">Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            {!sucess ? 
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
                    <Input placeholder="E-mail" size="large" id="success"/>
                </Form.Item>
                <Form.Item
                    name="username"
                >
                    <Input placeholder="Ваше имя" size="large"/>
                </Form.Item>
                <Form.Item
                    name="password"
                >
                    <Input
                        type="password"
                        placeholder="Пароль"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                >
                    <Input
                        type="password"
                        placeholder="Повторите пароль"
                        size="large"
                    />
                </Form.Item>
                <Form.Item>
                    <Button 
                        className="button__large" 
                        type="primary"
                    >
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <Link to="/" className="auth__register-link">Войти в аккаунт</Link>
            </Form> : 
            <div className="auth_sucess-block">
                <ExclamationCircleTwoTone style={{ fontSize: '45px' }}/>
                <h2>Подтвердите свой аккаунт</h2>
                <p>На вашу почту отправлено письмо с ссылкой на потверждение аккаунта</p>
            </div>
        }
        </>
    )
}
 
export default RegisterForm;