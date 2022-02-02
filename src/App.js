import './App.scss';

import CodingPlatform from './Pages/CodingPlatform/CodingPlatform';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import { connect } from 'react-redux';

// Default color of Text is White

function App(props) {

    const { darkmode } = props
	return (
		<div className='App' style={darkmode ? { backgroundImage: 'linear-gradient(rgb(26, 25, 85), rgb(8, 9, 16))' } : { backgroundColor: 'white' }}>
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
