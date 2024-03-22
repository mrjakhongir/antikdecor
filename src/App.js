import { Routes, Route, useLocation } from 'react-router-dom';
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

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { newsData } from './redux/newsSlice';
import { getData } from './utils';

function App() {
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		async function getNews(url) {
			const res = await getData(url);
			dispatch(newsData(res));
		}

		getNews('news/');
	}, [dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/catalog/:id' element={<Products />} />
				<Route path='/catalog/:id/:id' element={<ProductDetails />} />
				<Route path='/products/:id' element={<ProductDetails />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/news' element={<News />} />
				<Route path='/news/:id' element={<NewsDetail />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
