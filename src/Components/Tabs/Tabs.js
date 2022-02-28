import React, { useState } from 'react'
import Button from '../Button/Button'

import './Tabs.scss'

function Tabs({ srcDoc }) {
    const [activeTab, setActiveTab] = useState('Web')

    const handletabs = (val) => {
        setActiveTab(val)
    }

    return (
        <div className="tabs">
            <div className="topbar">
                <div>
                    <Button type="buttontxt" name="Save">
                        Run
                    </Button>
                </div>
                <div className="tabscol">
                    {/* Tab nav */}
                    <ul className="nav">
                        <li
                            className={activeTab === 'Web' ? 'active' : ''}
                            onClick={() => handletabs('Web')}
                        >
                            Web
                        </li>
                        <li
                            className={activeTab === 'Tablet' ? 'active' : ''}
                            onClick={() => handletabs('Tablet')}
                        >
                            Tablet
                        </li>
                        <li
                            className={activeTab === 'Mobile' ? 'active' : ''}
                            onClick={() => handletabs('Mobile')}
                        >
                            Mobile
                        </li>
                    </ul>
                </div>
            </div>
            <div className="outlet">
                {/* Content will be shown here */}
                <iframe
                    srcDoc={srcDoc}
                    title="Output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width={
                        activeTab === 'Web'
                            ? '100%'
                            : activeTab === 'Tablet'
                            ? '600px'
                            : '300px'
                    }
                    height="100%"
                    className="iframe_box"
                    style={{ borderRadius: activeTab === 'Web' ? 0 : 10 }}
                />
            </div>
        </div>
    )
}

export default Tabs
