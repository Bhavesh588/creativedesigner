import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Navigationbar.scss'

import Button from '../Button/Button';
import Inputbox from '../Inputbox/Inputbox';
import Dropdown from '../Dropdown/Dropdown';

function Navigationbar(props) {

    const { darkmode } = props

    const [filename, setFileName] = useState('Untitled')
    const [toggleDrop, setToggleDrop] = useState(false)

    const onChange = (e) => {
        setFileName(e.target.value)
    }

    return (
        <div className='navigationbar' style={{ backgroundColor: darkmode ? '#1a1955' : 'white', transition: '0.3s' }}>
            {/* Logo */}
            <div className='title'>
                <h2 style={{ color: darkmode ? null : 'black' }}>Creative Developer</h2>
            </div>
            {/* Filename */}
            <div className='filename'>
                <Inputbox 
                    aria-label="title"
                    type='text' 
                    id='title' 
                    name='title' 
                    value={filename} 
                    onChange={onChange}
                    onKeyPress={(ev) => {
                        if (ev.key === "Enter") {
                            ev.preventDefault();
                            if(ev.target.value === '') {
                                setFileName('Untitled')
                                console.log(ev.target.value);
                            }
                        }
                    }}
                />
            </div>
            {/* Profile */}
            <div className='profile'>
                <Button type='buttontxt' name="Save">Save</Button>
                <div style={{ position: 'relative' }}>
                    <Button type='buttontxt' name="Settings" setToggleDrop={setToggleDrop} toggleDrop={toggleDrop}>Setting</Button>
                    {
                        toggleDrop
                        ? <Dropdown />
                        : null
                    }
                </div>
                <Button type='buttonpic'>
                    <img src={require('../../assets/profile_pic.jpg')} alt='Profile' className='profilepic' />
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
		darkmode: state.darkmode,
	};
};

export default connect(mapStateToProps, null)(Navigationbar);
