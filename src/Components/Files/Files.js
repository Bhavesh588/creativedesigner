import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/paraiso-dark.css'
import 'codemirror/theme/paraiso-light.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { connect } from 'react-redux'

import '../FontAwesomeIcons'
import './Files.scss'
import Inputbox from '../Inputbox/Inputbox'
import variable from '../../responsive/_variables.scss'

const Files = ({ id, filename, values, onChange, onChangeFilename, onAddFilename, onDeleteFilename, ...props }) => {

    const { darkmode } = props

    const [collapse, setCollapse] = useState(false)
    const [language, setLanguage] = useState('')
    const [dropdown, setDropDown] = useState(false)

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

    const newfile = () => {
        setDropDown(false)
        onAddFilename('Untitled', id)
    }

    const deletefile = () => {
        setDropDown(false)
        onDeleteFilename(id)
    }

    return (
        <div className='files_main hovering' style={{ backgroundColor: darkmode ? variable.color3 : 'rgba(0,0,0,0.3)' }}>
            {/* Header of the Files */}
            <div className='files'>
                {/* File Name */}
                <div className='file_name'>
                    <span className='mx-3'>
                        {
                            lang() !== 'align-left'
                            ? <FontAwesomeIcon icon={['fab', lang()]} style={{ fontSize: 25, color: darkmode? variable.color2 : variable.color1 }} />
                            : <FontAwesomeIcon icon={['fa', lang()]} style={{ fontSize: 25, color: darkmode? variable.color2 : variable.color1 }} />
                        }
                    </span>
                    <Inputbox 
                        aria-label="filename"
                        type='text' 
                        id={'filename'+id} 
                        name='filename' 
                        value={filename} 
                        onChange={(e) => onChangeFilename(e.target.value, id)}
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
                        <FontAwesomeIcon icon='copy' style={{ fontSize: 25, color: darkmode? variable.color2 : variable.color1 }} />
                    </span>
                    <span className='mx-3'>
                        {/* DropDown to add New File */}
                        <FontAwesomeIcon icon='ellipsis-h' style={{ fontSize: 25, color: darkmode? variable.color2 : variable.color1 }} onClick={() => setDropDown(!dropdown)} />
                    </span>
                </div>
            </div>
            {/* DropDown */}
            <div className='droplist' id="dropfile" style={{ height: dropdown ? 'auto' : 0 }}>
                <ul className='list'>
                    <li onClick={() => newfile()}>New File</li>
                    <li onClick={() => deletefile()}>Delete File</li>
                </ul>
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
                            theme: darkmode ? 'paraiso-dark' : 'paraiso-light'
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

const mapStateToProps = (state) => {
	return {
		darkmode: state.darkmode,
	};
};

export default connect(mapStateToProps, null)(Files);
