import React, { useState } from 'react';

import './Navigationbar.scss'

import Button from '../Button/Button';
import Inputbox from '../Inputbox/Inputbox';
import Dropdown from '../Dropdown/Dropdown';

function Navigationbar() {

    const [filename, setFileName] = useState('Untitled')
    const [toggleDrop, setToggleDrop] = useState(false)

    const onChange = (e) => {
        setFileName(e.target.value)
    }

    return (
        <div className='navigationbar'>
            {/* Logo */}
            <div className='title'>
                <h2>Creative Developer</h2>
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

export default Navigationbar;
