import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import Basket from './pages/Basket';

function App() {
	return (
		<Router>
			<div>

				<Navbar />

	
				<div id='content'>
					<Routes>
						<Route path='/' exact element={<Products/>}></Route>
						<Route path='/product/:product_id' element={<ProductDetail/>}></Route>
						<Route path='/signin' element={<Signin/>}></Route>
						<Route path='/signup' element={<Signup />}></Route>
						<Route path='/basket' element={<Basket />}></Route>
						<Route path='/profile' element={<Profile />}></Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}


function Home() {
	return <h2>Home</h2>;
}

export default App;
