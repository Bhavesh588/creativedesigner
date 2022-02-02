import React from 'react';

import './Toggle.scss'

function Toggle({ value, setvalue }) {

    return (
        <div className='toggle_btn' onClick={() => setvalue(!value)} style={{ justifyContent: value ? 'flex-end' : 'flex-start' }}>
        {/* // <div className='toggle_btn' onClick={() => setvalue(!value)}> */}
            <div className='toggle_circle' style={{ backgroundColor: value ? '#522ebd' : 'palevioletred' }}></div>
        </div>
    );
}

export default Toggle;
