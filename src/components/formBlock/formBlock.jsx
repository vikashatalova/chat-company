import React from 'react';
import classNames from 'classnames';
import './formBlock.css'

const FormBlock = ({ children, className }) => {
    return ( 
     <div className={classNames('form-block', className)}>{children}</div>
    );
};


export default FormBlock;