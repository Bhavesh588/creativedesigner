import React from 'react'
import { connect } from 'react-redux'

import './Button.scss'
import variable from '../../responsive/_variables.scss'

const Button = ({ children, ...props }) => {
    const { darkmode } = props

    return (
        <div className="button">
            {props.type === 'buttontxt' ? (
                props.name === 'Settings' ? (
                    <button
                        className="button_btn_txt"
                        style={{
                            color: darkmode ? variable.color2 : variable.color1,
                            backgroundColor: darkmode
                                ? variable.color3
                                : 'rgba(0,0,0,0.3)',
                        }}
                        onClick={() => props.setToggleDrop(!props.toggleDrop)}
                    >
                        {children}
                    </button>
                ) : (
                    <button
                        className="button_btn_txt"
                        style={{
                            color: darkmode ? variable.color2 : variable.color1,
                            backgroundColor: darkmode
                                ? variable.color3
                                : 'rgba(0,0,0,0.3)',
                        }}
                    >
                        {children}
                    </button>
                )
            ) : (
                <button className="button_btn_pic">{children}</button>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        darkmode: state.darkmode,
    }
}

export default connect(mapStateToProps, null)(Button)
