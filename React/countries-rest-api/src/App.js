import { useState } from 'react';
import './App.css';
import { Header } from './Component/Banner';
import { Main } from "./Component/Main/Main"
function App() {
	return(
		<div className='App'>
			<Header  />
			<Main />
		</div>
	)
}


export default App;
