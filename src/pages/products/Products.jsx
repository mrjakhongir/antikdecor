import './products.scss';
import filter from '../../assets/svg/filter.svg';

import data from '../../data.json';
import ProductCard from '../../components/productsCard/ProductCard';
import Accordion from '../../components/accordion/Accordion';
import ContactUs from '../../components/contactUs/ContactUs';
import { Link } from 'react-router-dom';
const clocks = data.clocks;

const accordions = [
	{
		title: 'Авторство',
		accItems: ['Западная Европа', 'Русский период', 'Советский период'],
	},
	{
		title: 'Жанры',
		accItems: ['Анималистический жанр', 'Ботаника', 'Бытовые и жанровые сцены'],
	},
];

function Products() {
	return (
		<div className='products'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>ЧАСЫ И НАУЧНЫЕ ПРИБОРЫ</h2>
					<div className='filters-wrapper'>
						<div className='filters'>
							<span className='filter filter__active'>Все работы</span>
							<span className='filter'>Живопись</span>
							<span className='filter'>Графика</span>
							<span className='filter'>Рисунок</span>
						</div>
						<div className='filters__btn'>
							<span>Все фильтры</span>
							<span>
								<img src={filter} alt='filter' />
							</span>
						</div>
					</div>
					<div className='products__layout'>
						<div className='filters__large'>
							{accordions.map((accardion) => (
								<Accordion acc={accardion} />
							))}
						</div>
						<div className='products__grid'>
							{clocks.map((product) => (
								<Link to={`/products/${product.id}`}>
									<ProductCard key={product.id} el={product} />
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
			<ContactUs />
		</div>
	);
}

export default Products;
