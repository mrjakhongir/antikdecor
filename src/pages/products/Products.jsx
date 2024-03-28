import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductCard from '../../components/productCard/ProductCard';
import Accordion from '../../components/accordion/Accordion';
import ContactUs from '../../components/contactUs/ContactUs';
import { getData } from '../../utils';

import './products.scss';

import filter from '../../assets/svg/filter.svg';

function Products() {
	const { id } = useParams();

	const [filters, setFilters] = useState({});
	const [sidebar, setSidebar] = useState({});
	const [products, setProducts] = useState([]);
	const [nextLink, setNextLink] = useState('');
	const [firstLink, setFirstLink] = useState('');
	const [openFilterBtn, setOpenFilterBtn] = useState(false);

	const [categoryId, setCategoryId] = useState('');

	useEffect(() => {
		async function getFilters(url) {
			const data = await getData(url);
			setFilters(data);
		}

		getFilters(`category/${id}/`);
	}, [id]);

	useEffect(() => {
		async function getSidebar(url) {
			const data = await getData(url);
			setSidebar(data);
		}

		getSidebar(`category/${id}/sidebar/`);
	}, [id]);

	useEffect(() => {
		async function getProducts(url) {
			const data = await getData(url);

			setProducts(data.results);
			setNextLink(data.next);
			setFirstLink(data.next);
		}

		getProducts(`products/?category_id=${id}`);
	}, [id]);

	async function filterCat(url) {
		const data = await getData(url);
		setNextLink(data.next);
		setProducts(data.results);
	}

	async function getSidebarLinks(catId) {
		if (catId !== 0) {
			const data = await getData(`category/${catId}/sidebar`);
			setSidebar(data);
		} else {
			const data = await getData(`category/${id}/sidebar`);
			setSidebar(data);
		}
	}

	function filterSubCategory(n, catId) {
		const categories = document.querySelectorAll('.filter');

		categories.forEach((el, index) => {
			el.classList.remove('filter__active');
			n === index && el.classList.add('filter__active');
		});

		if (catId !== 0) {
			filterCat(`products/?category_id=${catId}`);
		} else {
			filterCat(`products/?category_id=${id}`);
			setNextLink(firstLink);
		}
		setCategoryId(catId);
		getSidebarLinks(catId);
	}

	let subCat = [];
	if (filters) {
		if (filters.subcategories) {
			subCat = filters.subcategories;
		}
	}

	const topFilters = [...[{ id: 0, name: 'Все работы' }], ...subCat];

	async function loadMoreProducts() {
		if (nextLink) {
			const index = nextLink.indexOf('8000');
			const endpoint = nextLink.slice(index + 5);

			const nextData = await getData(endpoint);
			setNextLink(nextData.next);
			setProducts((prevProducts) => [...prevProducts, ...nextData.results]);
		}
	}

	function openMobileFilters() {
		// setOpenFilterBtn(!openFilterBtn);
		setOpenFilterBtn(!openFilterBtn);
	}

	return (
		<div className='products'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>{filters?.name}</h2>
					<div className='filters-wrapper'>
						<div className='filters'>
							{topFilters.map((el, index) => (
								<span
									onClick={() => filterSubCategory(index, el.id)}
									key={el.id}
									className={`filter ${index === 0 && 'filter__active'}`}>
									{el.name}
								</span>
							))}
						</div>
						<div className='filters__btn'>
							<div onClick={openMobileFilters} className='filters__btn_head'>
								<span>Все фильтры</span>
								<span>
									<img src={filter} alt='filter' />
								</span>
							</div>
							<div
								className={`filter__btn_accordion ${
									openFilterBtn && 'filter__btn_accordion--open'
								}`}>
								{sidebar?.data?.map((accardion) => (
									<Accordion
										key={accardion.id}
										acc={accardion}
										func={setProducts}
										categoryId={categoryId}
										catalogId={id}
										setNextLink={setNextLink}
										setOpenFilterBtn={setOpenFilterBtn}
									/>
								))}
							</div>
						</div>
					</div>
					<div className='products__layout'>
						<div className='filters__large'>
							{sidebar?.data?.map((accardion) => (
								<Accordion
									key={accardion.id}
									acc={accardion}
									func={setProducts}
									categoryId={categoryId}
									catalogId={id}
									setNextLink={setNextLink}
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
					{nextLink && (
						<button onClick={loadMoreProducts} className='load-more'>
							Discover More
						</button>
					)}
				</div>
			</section>
			<ContactUs />
		</div>
	);
}

export default Products;
