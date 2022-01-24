import React from 'react';

import './CodingPlatform.scss'
import Files from '../../Components/Files/Files';

const CodingPlatform = () => {
	return (
		<div className='codingplatform'>
            <div className='container-fluid'>
                <div className='row p-5'>
                    {/* All Code Files Names */}
                    <div className='col-lg'>
                        <Files filename="doing.html" />
                        <Files filename="anything.css" />
                        <Files filename="like.js" />
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
