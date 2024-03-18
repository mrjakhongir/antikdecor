import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Basket from './pages/basket/Basket';
import Catalog from './pages/catalog/Catalog';
import Contacts from './pages/contacts/Contacts';
import News from './pages/news/News';
import Products from './pages/products/Products';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewsDetail from './pages/news/newsDetail/NewsDetail';
import ProductDetails from './pages/products/productDetails/productDetails';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/news' element={<News />} />
				<Route path='/news/:id' element={<NewsDetail />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<ProductDetails />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
