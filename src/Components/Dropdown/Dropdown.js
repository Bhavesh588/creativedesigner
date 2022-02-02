import React from 'react';
import { connect } from 'react-redux';
import Toggle from '../Toggle/Toggle';

import './Dropdown.scss'

function Dropdown(props) {

    const { saveAuto, autoPre, codeSpace, darkmode, setSaveAuto, setAutoPre, setCodeSpace, setdarkmode } = props

    return (
        <div className='dropdownlist bg-light'>
            <div className='item_box'>
                <div className='item_txt'>Save Automatic</div>
                <Toggle value={saveAuto} setvalue={setSaveAuto} />
            </div>
            <div className='item_box'>
                <div className='item_txt'>Auto Updating Preview</div>
                <Toggle value={autoPre} setvalue={setAutoPre} />
            </div>
            <div className='item_box'>
                <div className='item_txt'>Code Space</div>
                <Toggle value={codeSpace} setvalue={setCodeSpace} />
            </div>
            <div className='item_box'>
                <div className='item_txt'>Indent</div>
            </div>
            <div className='item_box'>
                <div className='item_txt'>Dark Mode</div>
                <Toggle value={darkmode} setvalue={setdarkmode} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
        saveAuto: state.saveAuto,
        autoPre: state.autoPre,
        codeSpace: state.codeSpace,
		darkmode: state.darkmode,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        setSaveAuto: (val) => {
            dispatch({
                type: "SAVEAUTO",
                item: val,
            });
        },
        setAutoPre: (val) => {
			dispatch({
				type: "AUTOPRE",
				item: val,
			});
		},
        setCodeSpace: (val) => {
			dispatch({
				type: "CODESPACE",
				item: val,
			});
		},
		setdarkmode: (val) => {
			dispatch({
				type: "DARKMODE",
				item: val,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
