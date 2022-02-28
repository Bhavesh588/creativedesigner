import React from 'react'
import Tabs from '../Tabs/Tabs'

import './LivePreview.scss'

function LivePreview({ code }) {
    const srcDoc = `
        <html>
            <body>
                ${code[0]}
            </body>
            <style>
                ${code[1]}
            </style>
            <script>
                ${code[2]}
            <script>
        </html>
    `

    return (
        <div className="livepreview">
            <Tabs srcDoc={srcDoc} />
        </div>
    )
}

export default LivePreview
