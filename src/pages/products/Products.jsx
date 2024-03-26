import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductCard from '../../components/productCard/ProductCard';
import Accordion from '../../components/accordion/Accordion';
import ContactUs from '../../components/contactUs/ContactUs';
import { getData } from '../../utils';

import './products.scss';
import filter from '../../assets/svg/filter.svg';

import data from '../../data.json';
import Pagination from '../../components/pagination/Pagination';

const categories = data.catalog;

function Products() {
	const { id } = useParams();

	const [filters, setFilters] = useState({});
	const [products, setProducts] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const [categoryId, setCategoryId] = useState('');

	const currentCategory = categories.find((el) => el.id === +id);

	useEffect(() => {
		async function getFilters(url) {
			const data = await getData(url);
			setFilters(data);
		}

		getFilters(`products/categories/${id}/`);
	}, [id]);

	useEffect(() => {
		async function getProducts(url) {
			const data = await getData(url);
			console.log(data);
			setProducts(data.results);
			setTotalPages(Math.ceil(data.count / 9));
		}

		getProducts(`products/?category_id=${id}&page=${currentPage}/`);
	}, [id, currentPage]);

	async function filterCat(url) {
		const data = await getData(url);
		setProducts(data);
	}

	function handleClick(n, catId) {
		const categories = document.querySelectorAll('.filter');
		categories.forEach((el, index) => {
			el.classList.remove('filter__active');
			n === index && el.classList.add('filter__active');
		});
		if (catId !== 0) {
			filterCat(`products/?category_id=${catId}/`);
		} else {
			filterCat(`products/?category_id=${id}/`);
		}
		setCategoryId(catId);
	}

	let subCat = [];
	if (filters) {
		if (filters.sub_categories) {
			subCat = filters.sub_categories;
		}
	}
	const arr = [...[{ id: 0, name: 'Все работы' }], ...subCat];

	return (
		<div className='products'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>{currentCategory.title}</h2>
					<div className='filters-wrapper'>
						<div className='filters'>
							{arr.map((el, index) => (
								<span
									onClick={() => handleClick(index, el.id)}
									key={el.id}
									className={`filter ${index === 0 && 'filter__active'}`}>
									{el.name}
								</span>
							))}
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
							{filters?.sidebar?.map((accardion) => (
								<Accordion
									key={accardion.id}
									acc={accardion}
									func={setProducts}
									categoryId={categoryId}
									catalogId={id}
								/>
							))}
						</div>
						<div className='products__grid'>
							{products?.map((product) => (
								<Link key={product.id} to={`/catalog/${id}/${product.id}`}>
									<ProductCard key={product.id} el={product} />
								</Link>
							))}
						</div>
					</div>
					<div>
						<Pagination
							totalPages={totalPages}
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
						/>
					</div>
				</div>
			</section>
			<ContactUs />
		</div>
	);
}

export default Products;
