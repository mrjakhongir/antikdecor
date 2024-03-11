import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Basket from './pages/basket/Basket';
import Catalog from './pages/catalog/Catalog';
import Contacts from './pages/contacts/Contacts';
import News from './pages/news/News';
import Products from './pages/products/Products';
import Header from './components/header/Header';

function App() {
	return (
		<div className='section'>
			{/* <div className='container'> */}
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/news' element={<News />} />
				<Route path='/news' element={<Products />} />
			</Routes>
			{/* </div> */}
		</div>
	);
}

export default App;
