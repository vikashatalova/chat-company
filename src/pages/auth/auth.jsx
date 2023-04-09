import React from 'react';
import FormBlock from '../../components/formBlock/formBlock';
import LoginForm from '../../modules/LoginForm/components/loginForm';
import RegisterForm from '../../modules/registerForm/registerForm';
import { Route, Routes } from 'react-router-dom';
import "./auth.css"


const Auth = () => {
    return ( 
        <div className="auth">
            <FormBlock>
                <div className="auth__content">
                    <Routes>
                        <Route exact path="/" Component={LoginForm}/>
                        <Route path="/register" Component={RegisterForm}/>
                    </Routes>
                </div>
            </FormBlock> 
            
        </div>
    );
}
 
export default Auth;