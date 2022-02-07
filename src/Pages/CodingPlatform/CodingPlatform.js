import React, { useState } from 'react';

import './CodingPlatform.scss'
import Files from '../../Components/Files/Files';

const CodingPlatform = () => {

    const [filename, setFilename] = useState(['doing.html', 'anything.css', 'like.js'])
    const [code, setCode] = useState(['', '', ''])

    // const [html, setHtml] = useState('')
    // const [css, setCss] = useState('')
    // const [js, setJs] = useState('')


    const onChangeFilename = (values, id) => {
        let val = [...filename]
        val[id] = values
        setFilename(val)
    }

    const onAddFilename = (values, id) => {
        let val = [...filename]
        val.splice(id+1, 0, values)
        setFilename(val)
    }

    const onDeleteFilename = (id) => {
        let val = [...filename]
        val.splice(id, 1)
        setFilename(val)
    }

	return (
		<div className='codingplatform'>
            <div className='container-fluid'>
                <div className='row p-5'>
                    {/* All Code Files Names */}
                    <div className='col-lg scrollable'>
                        {
                            filename?.map((file, index) => 
                                <div className='files_outer' key={index}>
                                    <Files 
                                        filename={file} 
                                        id={index} 
                                        values={code} 
                                        onChange={setCode} 
                                        onChangeFilename={onChangeFilename}
                                        onAddFilename={onAddFilename}
                                        onDeleteFilename={onDeleteFilename}
                                    />
                                </div>
                            )
                        }
                    </div>
                    {/* Live Preview, Console, etc... */}
                    <div className='col-lg'>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default CodingPlatform;
