import React, { useState } from 'react'

import './CodingPlatform.scss'
import Files from '../../Components/Files/Files'
import LivePreview from '../../Components/LivePreview/LivePreview'

const CodingPlatform = () => {
    const [filename, setFilename] = useState([
        'doing.html',
        'anything.css',
        'like.js',
    ])
    const [code, setCode] = useState([
        `
<div class="luke">
    <h1>Hello Lucifer</h1>
    <h2>Experience is the name everyone gives to their mistakes</h2>
<div>
        `,
        `
.luke {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    margin: 0;
    font-size: 40px;
}

h2 {
    margin: 0;
    font-size: 25px;
	text-align: center;
}

@media only screen and (max-width : 300px) {
	h1 {
		font-size: 25px;
	}
	h2 {
		font-size: 15px;
	}
}
        `,
        '',
    ])

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
        let co = [...code]
        val.splice(id + 1, 0, values)
        co.splice(id + 1, 0, '')
        setFilename(val)
        setCode(co)
    }

    const onDeleteFilename = (id) => {
        let val = [...filename]
        let co = [...code]
        val.splice(id, 1)
        co.splice(id, 1)
        setFilename(val)
        setCode(co)
    }

    return (
        <div className="codingplatform">
            <div className="container-fluid">
                <div className="row p-5">
                    {/* All Code Files Names */}
                    <div className="col-lg scrollable">
                        {filename?.map((file, index) => (
                            <div className="files_outer" key={index}>
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
                        ))}
                    </div>
                    {/* Live Preview, Console, etc... */}
                    <div className="col-lg">
                        <LivePreview code={code} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodingPlatform
