import React from 'react';

import './Inputbox.scss'

const Inputbox = ({ type, id, name, onChange, onKeyPress, placeholder='', value='' }) => {
    return (
        <div className='inputbox'>
            {
                id === 'title'
                ? <div>
                    <input className='input_txt_filename text-center' type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress} />
                    <span className='focus_border'></span>
                </div>
                : <div>
                    <input className='input_txt_filename' type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress} />
                    <span className='focus_border'></span>
                </div>
            }
        </div>
    );
};

export default Inputbox;
