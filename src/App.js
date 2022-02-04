import './App.scss';
import variable from './responsive/_variables.scss'

import CodingPlatform from './Pages/CodingPlatform/CodingPlatform';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import { connect } from 'react-redux';

// Default color of Text is White

function App(props) {

    const { darkmode } = props
	return (
		<div className='App' style={darkmode ? { backgroundImage: `linear-gradient(${variable.color5}, ${variable.color1}` } : { backgroundColor: variable.color2 }}>
            <div>
                <Navigationbar />
                <CodingPlatform />
            </div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		darkmode: state.darkmode,
	};
};

export default connect(mapStateToProps, null)(App);
