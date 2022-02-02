import React from 'react';

import './Button.scss'

const Button = ({ children, ...props }) => {
    return (
        <div className='button'>
            {
                props.type === 'buttontxt'
                ? props.name === 'Settings'
                    ? <button className='button_btn_txt' onClick={() => props.setToggleDrop(!props.toggleDrop)}>{children}</button>
                    : <button className='button_btn_txt'>{children}</button>
                : <button className='button_btn_pic'>{children}</button>
            }
        </div>
    );
};

export default Button;
