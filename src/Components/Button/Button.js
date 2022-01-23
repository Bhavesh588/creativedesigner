import React from 'react';

import './Button.scss'

const Button = ({ children, ...props }) => {
    return (
        <div className='button'>
            {
                props.type === 'buttontxt'
                ? <button className='button_btn_txt'>{children}</button>
                : <button className='button_btn_pic'>{children}</button>
            }
        </div>
    );
};

export default Button;
