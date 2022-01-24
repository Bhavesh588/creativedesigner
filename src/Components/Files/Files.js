import React, { useState } from 'react';

import '../FontAwesomeIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Files.scss'

const Files = ({ filename }) => {

    const [collapse, setCollapse] = useState(false)

    const lang = () => {
        var spliting = filename.split('.')
        if(spliting[1] === 'html') return 'html5'
        if(spliting[1] === 'css') return 'css3'
        if(spliting[1] === 'js') return 'js-square'
    }

    const Expanding = () => {
        if(!collapse) {
            document.getElementById(filename).style.height = '100px'
            document.getElementById(filename).style.marginTop = '10px'
            setCollapse(!collapse)
        } else {
            document.getElementById(filename).style.height = '0px'
            document.getElementById(filename).style.marginTop = '0px'
            setCollapse(!collapse)
        }
    }

    return (
        <div className='files_main'>
            {/* Header of the Files */}
            <div className='files' onClick={Expanding}>
                {/* File Name */}
                <div className='file_name'>
                    <span className='mx-3'>
                        <FontAwesomeIcon icon={['fab', lang()]} style={{ fontSize: 30 }} />
                    </span>
                    <h5>{filename}</h5>
                </div>
                {/* Copy and more options */}
                <div className='file_option'>
                    <span className='mx-3'>
                        <FontAwesomeIcon icon='copy' style={{ fontSize: 25 }} />
                    </span>
                    <span className='mx-3'>
                        <FontAwesomeIcon icon='ellipsis-h' style={{ fontSize: 25 }} />
                    </span>
                </div>
            </div>
            {/* Code of the Files */}
            <div className='file_code' id={filename}>
            </div>
        </div>
    );
};

export default Files;
