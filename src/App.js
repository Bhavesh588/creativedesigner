import './App.scss';

import CodingPlatform from './Pages/CodingPlatform/CodingPlatform';
import Navigationbar from './Components/Navigationbar/Navigationbar';

// Default color of Text is White

function App() {
	return (
		<div className='App'>
            <div className='l'>
                <Navigationbar />
                <CodingPlatform />
            </div>
		</div>
	);
}

export default App;
