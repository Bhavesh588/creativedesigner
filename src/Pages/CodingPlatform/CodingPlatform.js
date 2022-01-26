import React, { useState } from 'react';

import './CodingPlatform.scss'
import Files from '../../Components/Files/Files';

const CodingPlatform = () => {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

	return (
		<div className='codingplatform'>
            <div className='container-fluid'>
                <div className='row p-5'>
                    {/* All Code Files Names */}
                    <div className='col-lg scrollable'>
                        <div className='files_outer'>
                            <Files filename="doing.html" value={html} onChange={setHtml} />
                        </div>
                        <div className='files_outer'>
                            <Files filename="anything.css" value={css} onChange={setCss} />
                        </div>
                        <div className='files_outer'>
                            <Files filename="like.js" value={js} onChange={setJs} />
                        </div>
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
