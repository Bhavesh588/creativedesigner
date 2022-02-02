import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';

import './Dropdown.scss'

function Dropdown() {

    const [saveAuto, setSaveAuto] = useState(false)
    const [autoPre, setAutoPre] = useState(false)
    const [codeSpace, setCodeSpace] = useState(false)
    // const [indent, setIndent] = useState('')
    const [mode, setMode] = useState(false)

    return (
        <div className='dropdownlist bg-light'>
            <div className='item_box'>
                <div className='item_txt'>Save Automatic</div>
                <Toggle value={saveAuto} setvalue={setSaveAuto} />
            </div>
            <div className='item_box'>
                <div className='item_txt'>Auto Updating Preview</div>
                <Toggle value={autoPre} setvalue={setAutoPre} />
            </div>
            <div className='item_box'>
                <div className='item_txt'>Code Space</div>
                <Toggle value={codeSpace} setvalue={setCodeSpace} />
            </div>
            <div className='item_box'>
                <div className='item_txt'>Indent</div>
            </div>
            <div className='item_box'>
                <div className='item_txt'>Dark Mode</div>
                <Toggle value={mode} setvalue={setMode} />
            </div>
        </div>
    );
}

export default Dropdown;
