import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

import '../FontAwesomeIcons'
import './Files.scss'
import Inputbox from '../Inputbox/Inputbox'

const Files = ({ id, filename, values, onChange, onChangeFilename }) => {

    const [collapse, setCollapse] = useState(false)
    const [language, setLanguage] = useState('')

    useEffect(() => {
        var spliting = filename.split('.')
        if(spliting[1] === 'html') {
            setLanguage('xml')
            return 'html5'
        } else if(spliting[1] === 'css') {
            setLanguage('css')
            return 'css3'
        } else if(spliting[1] === 'js') {
            setLanguage('javascript')
            return 'js-square'
        }
    }, [filename])

    const lang = () => {
        var spliting = filename.split('.')
        if(spliting[1] === 'html') {
            return 'html5'
        } else if(spliting[1] === 'css') {
            return 'css3'
        } else if(spliting[1] === 'js') {
            return 'js-square'
        } else {
            return 'align-left'
        }
    }

    const Expanding = () => {
        if(!collapse) {
            document.getElementById(filename).parentElement.classList.remove('hovering')
            document.getElementById(filename).getElementsByClassName('code')[0].style.height = 'auto' 
            document.getElementById(filename).style.height = 'auto'
            document.getElementById(filename).style.marginTop = '10px'
            document.getElementById(filename).style.padding = '0px 20px 20px 20px'
            setCollapse(!collapse)
        } else {
            document.getElementById(filename).parentElement.classList.add('hovering')
            document.getElementById(filename).getElementsByClassName('code')[0].style.height = '0px' 
            document.getElementById(filename).style.height = '0px'
            document.getElementById(filename).style.marginTop = '0px'
            document.getElementById(filename).style.padding = '0px'
            setCollapse(!collapse)
        }
    }

    const handleChange = (editor, data, value) => {
        let coding = [...values]
        coding[id] = value
        onChange(coding)
    }

    return (
        <div className='files_main hovering'>
            {/* Header of the Files */}
            <div className='files'>
                {/* File Name */}
                <div className='file_name'>
                    <span className='mx-3'>
                        {
                            lang() !== 'align-left'
                            ? <FontAwesomeIcon icon={['fab', lang()]} style={{ fontSize: 25 }} />
                            : <FontAwesomeIcon icon={['fa', lang()]} style={{ fontSize: 25 }} />
                        }
                    </span>
                    <Inputbox 
                        aria-label="filename"
                        type='text' 
                        id={'filename'+id} 
                        name='filename' 
                        value={filename} 
                        onChange={(e) => onChangeFilename(e, id)}
                        style={{ zIndex: 3 }}
                    />
                    {/* <h5>{filename}</h5> */}
                </div>
                {/* Space for clicking to Expand and collapse */}
                <div className='flex-grow-1 p-1 w-100' onClick={Expanding}>
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
                <div className='code'>
                    <ControlledEditor
                        onBeforeChange={handleChange}
                        value={values[id]}
                        className='code-mirror-wrapper'
                        options={{
                            lineWrapping: true,
                            lint: true,
                            mode: language,
                            lineNumbers: true,
                            theme: 'material'
                        }}
                    />
                </div>
                <div className='lang_option'>
                    <div className='select_lang'>
                        {/* <select defaultValue={filename.split('.')[1]}>
                            <option value='html'>HTML5</option>
                            <option value='css'>CSS3</option>
                            <option value='js'>JavaScript</option>
                        </select> */}
                    </div>
                    <div className='line_count'>
                        <p>365 chars</p>
                        <p>23 lines</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Files;
