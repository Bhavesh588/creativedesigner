import React from 'react'

import './Tooltips.scss'

const Tooltips = ({ children, tips }) => {
    return (
        <div className="tooltip1">
            {children}
            <span className="tooltiptext">{tips}</span>
        </div>
    )
}

export default Tooltips