import React from 'react';

import './Toggle.scss'
import variable from '../../responsive/_variables.scss'

function Toggle({ value, setvalue }) {

    return (
        <div className='toggle_btn' onClick={() => setvalue(!value)} style={{ justifyContent: value ? 'flex-end' : 'flex-start' }}>
        {/* // <div className='toggle_btn' onClick={() => setvalue(!value)}> */}
            <div className='toggle_circle' style={{ backgroundColor: value ? variable.color3 : 'palevioletred' }}></div>
        </div>
    );
}

export default Toggle;
