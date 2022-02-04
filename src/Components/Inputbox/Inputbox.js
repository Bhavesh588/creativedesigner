import React from 'react';
import { connect } from 'react-redux';
import variable from '../../responsive/_variables.scss'

import './Inputbox.scss'

const Inputbox = ({ type, id, name, onChange, onKeyPress, placeholder='', value='', ...props }) => {

    const { darkmode } = props
    
    return (
        <div className='inputbox'>
            {
                id === 'title'
                ? <div>
                    <input 
                        className='input_txt_filename text-center' 
                        style={{ color: darkmode ? variable.color2 : variable.color1, fontSize: 25 }}
                        type={type} 
                        id={id} 
                        name={name} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onChange} 
                        onKeyPress={onKeyPress} />
                    <span className='focus_border'></span>
                </div>
                : <div>
                    <input 
                        className='input_txt_filename'
                        style={{ color: darkmode ? variable.color2 : variable.color1 }} 
                        type={type} 
                        id={id} name={name} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onChange} 
                        onKeyPress={onKeyPress} />
                    <span className='focus_border'></span>
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
	return {
		darkmode: state.darkmode,
	};
};

export default connect(mapStateToProps, null)(Inputbox);
