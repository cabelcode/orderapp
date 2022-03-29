import './style.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import {OrderContext} from './components/context/global';
import { useState } from 'react';
import Checkout from './components/Checkout';
	
const App = () => {
	const [order, setOrder] = useState([]);
	const [page, setPage] = useState('menu');
	return (
		<div className="App">
			<OrderContext.Provider value={order}>
				<Navbar page={page} setPage={setPage}/>
				<Menu page={page} setPage={setPage} setOrder={setOrder}/>
				<Checkout page={page} setPage={setPage} setOrder={setOrder} /> 
			</OrderContext.Provider>
			
		</div>
	);

}

export default App;
