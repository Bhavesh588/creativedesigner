import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from '../Toggle/Toggle'

import './Dropdown.scss'

function Dropdown(props) {
    const {
        saveAuto,
        autoPre,
        codeSpace,
        darkmode,
        indent,
        setSaveAuto,
        setAutoPre,
        setCodeSpace,
        setdarkmode,
        setIndent,
    } = props

    return (
        <div className="dropdownlist bg-light">
            <div className="item_box">
                <div className="item_txt">Save Automatic</div>
                <Toggle value={saveAuto} setvalue={setSaveAuto} />
            </div>
            <div className="item_box">
                <div className="item_txt">Auto Updating Preview</div>
                <Toggle value={autoPre} setvalue={setAutoPre} />
            </div>
            <div className="item_box">
                <div className="item_txt">Code Space</div>
                <Toggle value={codeSpace} setvalue={setCodeSpace} />
            </div>
            <div className="item_box">
                <div className="item_txt">Indent</div>
                <div className="indentation">
                    <div className="icon_outer">
                        <FontAwesomeIcon
                            icon="minus"
                            className="icon_style"
                            onClick={() => setIndent(indent - 1)}
                        />
                    </div>
                    {indent}
                    <div className="icon_outer">
                        <FontAwesomeIcon
                            icon="plus"
                            className="icon_style"
                            onClick={() => setIndent(indent + 1)}
                        />
                    </div>
                </div>
            </div>
            <div className="item_box">
                <div className="item_txt">Dark Mode</div>
                <Toggle value={darkmode} setvalue={setdarkmode} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        saveAuto: state.saveAuto,
        autoPre: state.autoPre,
        codeSpace: state.codeSpace,
        darkmode: state.darkmode,
        indent: state.indent,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSaveAuto: (val) => {
            dispatch({
                type: 'SAVEAUTO',
                item: val,
            })
        },
        setAutoPre: (val) => {
            dispatch({
                type: 'AUTOPRE',
                item: val,
            })
        },
        setCodeSpace: (val) => {
            dispatch({
                type: 'CODESPACE',
                item: val,
            })
        },
        setdarkmode: (val) => {
            dispatch({
                type: 'DARKMODE',
                item: val,
            })
        },
        setIndent: (val) => {
            dispatch({
                type: 'INDENT',
                item: val,
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
