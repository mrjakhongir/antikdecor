import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCatId } from '../../../../redux/catIdSlice';
import { selectSubCatId } from '../../../../redux/subCatIdSlice';

import './navbar.scss';

import smallLogo from '../../../../assets/svg/antikdecor_logo_small.svg';
import exit from '../../../../assets/svg/exit.svg';
import { getData } from '../../../../utils';

function Navbar({ show, setShowNav }) {
	const dispatch = useDispatch();
	const [showMobileCategories, setShowMobileCategories] = useState(false);
	const [showAccordionBody1, setShowAccordionBody1] = useState(false);
	const [showAccordionBody2, setShowAccordionBody2] = useState(false);

	const [searchResults, setSearchResults] = useState([]);
	const [showSearchResults, setShowSearchResults] = useState(false);

	async function handleSearch(e) {
		const inputVal = e.target.value;
		const searchData = await getData(`products/?search=${inputVal}`);
		setSearchResults(searchData.results);

		if (inputVal) {
			setShowSearchResults(true);
		} else {
			setShowSearchResults(false);
		}
	}

	function selectProduct() {
		setShowSearchResults(false);
		const input = document.querySelector('.search-input--large');
		input.value = '';
	}

	function changeActiveLink(n) {
		const LINKS = document.querySelectorAll('.nav-link');

		LINKS.forEach((link, index) => {
			link.classList.remove('active-link');

			if (n === index) {
				link.classList.add('active-link');
			}
		});

		setShowSearchResults(false);

		const input = document.querySelector('.search-input--large');
		input.value = '';
	}

	function selectSubCat(subCatId, catId = 10) {
		dispatch(selectCatId(catId));
		dispatch(selectSubCatId(subCatId));
		setShowNav(false);
	}

	return (
		<nav className={`header__nav ${show && 'open-nav'}`}>
			<section className='section'>
				<div className='container'>
					<div className='header__nav_large'>
						<div className='nav__links'>
							{[
								{ name: 'Главная', link: '/' },
								{ name: 'Каталог', link: '' },
								{ name: 'Новости', link: '/news' },
								{ name: 'О нас', link: '/about' },
								{ name: 'Контакты', link: '/contacts' },
							].map((el, index) => {
								if (el.link) {
									return (
										<Link
											key={index}
											onClick={() => changeActiveLink(index, el.name)}
											className={`nav-link ${index === 0 && 'active-link'}`}
											to={el.link}>
											{el.name}
										</Link>
									);
								} else {
									return (
										<Link
											key={index}
											onClick={() => changeActiveLink(index, el.name)}
											to='/catalog'
											className={`nav-link ${
												index === 0 && 'active-link'
											} catalog-link`}>
											{el.name}
											<div className={`nav__catalog`}>
												<div class='catalog__inner'>
													<div className='nav__catalog-column'>
														<h5 className='nav__catalog-title'>
															<Link to={'catalog/1'}>Живопись, графика</Link>
														</h5>
														<Link
															className='catalog-subcategories'
															to='catalog/1'
															state='1'
															onClick={() => selectSubCat(70, 1)}>
															Российская
														</Link>
														<Link
															className='catalog-subcategories'
															to='catalog/1'
															state='2'
															onClick={() => selectSubCat(45, 1)}>
															Европейская
														</Link>
													</div>
													<div className='nav__catalog-column'>
														<h5 className='nav__catalog-title'>
															<Link to={'catalog/10'}>Гравюры, литографии</Link>
														</h5>
														<Link
															onClick={() => selectSubCat(56)}
															className='catalog-subcategories'
															to='catalog/10'
															state='3'>
															Анималистика
														</Link>
														<Link
															onClick={() => selectSubCat(43)}
															className='catalog-subcategories'
															state='4'
															to='catalog/10'>
															Ботаника
														</Link>
														<Link
															onClick={() => selectSubCat(65)}
															className='catalog-subcategories'
															state='5'
															to='catalog/10'>
															Бытовые и жанровые сцены
														</Link>
														<Link
															className='catalog-subcategories'
															state='6'
															to='catalog/10'
															onClick={() => selectSubCat(48)}>
															Архитектура, виды городов
														</Link>
														<Link
															className='catalog-subcategories'
															state='7'
															to='catalog/10'
															onClick={() => selectSubCat(50)}>
															Батальный жанр
														</Link>
														<Link
															className='catalog-subcategories'
															state='8'
															to='catalog/10'
															onClick={() => selectSubCat(69)}>
															Модные гравюры
														</Link>
														<Link
															className='catalog-subcategories'
															state='9'
															to='catalog/10'
															onClick={() => selectSubCat(63)}>
															Портрет
														</Link>
													</div>
													<div className='nav__catalog-column'>
														<Link
															className='catalog-subcategories'
															state='10'
															to='catalog/10'
															onClick={() => selectSubCat(68)}>
															Географические карты и планы
														</Link>
														<Link
															className='catalog-subcategories'
															state='11'
															to='catalog/10'
															onClick={() => selectSubCat(52)}>
															Морская тема
														</Link>
														<Link
															className='catalog-subcategories'
															state='12'
															to='catalog/10'
															onClick={() => selectSubCat(59)}>
															Дети
														</Link>
														<Link
															className='catalog-subcategories'
															state='13'
															to='catalog/10'
															onClick={() => selectSubCat(55)}>
															Религиозные сюжеты
														</Link>
														<Link
															className='catalog-subcategories'
															state='14'
															to='catalog/10'
															onClick={() => selectSubCat(46)}>
															Мифология
														</Link>
														<Link
															className='catalog-subcategories'
															state='15'
															to='catalog/10'
															onClick={() => selectSubCat(64)}>
															Пейзаж
														</Link>
														<Link
															className='catalog-subcategories'
															state='16'
															to='catalog/10'
															onClick={() => selectSubCat(51)}>
															Спорт, Охота, Рыбалка
														</Link>
													</div>
													<div className='nav__catalog-column'>
														<Link className='catalog-categories' to='catalog/5'>
															Стекло
														</Link>
														<Link className='catalog-categories' to='catalog/3'>
															Бронза
														</Link>
														<Link className='catalog-categories' to='catalog/6'>
															Мебель и зеркала
														</Link>
														<Link className='catalog-categories' to='catalog/2'>
															Антикварные штопоры и <br></br>винный антиквариат
														</Link>
														<Link className='catalog-categories' to='catalog/9'>
															Искусство Востока,<br></br> Африки и Азии
														</Link>
													</div>
													<div className='nav__catalog-column'>
														<Link className='catalog-categories' to='catalog/5'>
															Фарфор
														</Link>
														<Link className='catalog-categories' to='catalog/8'>
															Предметы антикварного декора
														</Link>
													</div>
												</div>
											</div>
										</Link>
									);
								}
							})}
						</div>
						<div className='nav__filter'>
							<div>
								<input
									onChange={(e) => handleSearch(e)}
									type='text'
									placeholder='Поиск по каталогу'
									className='search-input--large'
								/>
								<svg
									width='19'
									height='19'
									viewBox='0 0 19 19'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										className='header__search'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M17.4269 18.7743L13.1101 14.4575C9.74327 17.1112 4.89166 16.6809 2.04429 13.4763C-0.80307 10.2716 -0.659504 5.4031 2.37173 2.37181C5.40301 -0.65948 10.2716 -0.803104 13.4762 2.04426C16.6808 4.89162 17.1111 9.74324 14.4576 13.1101L18.7753 17.4269C19.095 17.807 19.0709 18.3685 18.7197 18.7197C18.3685 19.0709 17.807 19.095 17.4269 18.7753L17.4269 18.7743ZM1.90417 8.09498C1.90412 10.5844 3.39421 12.8314 5.68693 13.7999C7.97966 14.7683 10.6294 14.27 12.4137 12.5349C12.4319 12.5128 12.4513 12.4915 12.4717 12.4711C12.4927 12.4501 12.5138 12.4309 12.5358 12.4127C14.4816 10.4111 14.8475 7.35478 13.4291 4.95032C12.0107 2.5458 9.15885 1.3877 6.46562 2.12253C3.77239 2.85729 1.90382 5.30334 1.90312 8.09498H1.90417Z'
										fill='#EA5544'
									/>
								</svg>
							</div>
							<button>Написать в WhatsApp</button>
						</div>
					</div>
					<div
						className={`search-results ${showSearchResults && 'open-search'}`}>
						{searchResults?.map((el) => (
							<Link
								onClick={() => selectProduct(el.name)}
								to={`/products/${el.id}`}>
								<span>
									<img src={el.images[0]} alt='' />
								</span>
								<p>{el.name}</p>
							</Link>
						))}
					</div>
				</div>
			</section>

			<div className='header__nav_small'>
				<div className='nav_small_top'>
					<Link onClick={() => setShowNav(!show)} to={'/'}>
						<img src={smallLogo} alt='antikdecor logo' />
					</Link>
					<img onClick={() => setShowNav(!show)} src={exit} alt='cross' />
				</div>

				<div className='nav_small_links'>
					<Link onClick={() => setShowNav(!show)} to='/'>
						Главная
					</Link>
					<div className='nav__accordion'>
						<div
							onClick={() => setShowMobileCategories(!showMobileCategories)}
							className={`accordion-title ${
								showMobileCategories && 'selected-title'
							}`}>
							<span>Каталог</span>
							<svg
								width='14'
								height='8'
								viewBox='0 0 14 8'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									className='nav__caret'
									d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
									stroke='#ea5544'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<div
							className={`accordion-body ${
								showMobileCategories && 'show-accordion-body'
							}`}>
							<div>
								<div>
									<div
										className={`accordion-title ${
											showAccordionBody1 && 'selected-subtitle'
										}`}
										onClick={() => setShowAccordionBody1(!showAccordionBody1)}>
										<span>Живопись, графика</span>
										<svg
											width='14'
											height='8'
											viewBox='0 0 14 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												className='nav__caret'
												d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
												stroke='#ea5544'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
									{showAccordionBody1 && (
										<div className='sub-body'>
											<Link
												to='catalog/1'
												state='1'
												onClick={() => selectSubCat(70, 1)}>
												Российская
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(45, 1)}>
												Европейская
											</Link>
										</div>
									)}
								</div>

								<div>
									<div
										className={`accordion-title ${
											showAccordionBody2 && 'selected-subtitle'
										}`}
										onClick={() => setShowAccordionBody2(!showAccordionBody2)}>
										<span>Гравюры, литографии</span>
										<svg
											width='14'
											height='8'
											viewBox='0 0 14 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												className='nav__caret'
												d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
												stroke='#ea5544'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
									{showAccordionBody2 && (
										<div className='sub-body'>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(56)}>
												Анималистика
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(43)}>
												Ботаника
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(65)}>
												Бытовые и жанровые сцены
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(48)}>
												Архитектура, виды городов
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(50)}>
												Батальный жанр
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(69)}>
												Модные гравюры
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(63)}>
												Портрет
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(68)}>
												Географические карты и планы
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(52)}>
												Морская тема
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(59)}>
												Дети
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(55)}>
												Религиозные сюжеты
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(46)}>
												Мифология
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(64)}>
												Пейзаж
											</Link>
											<Link
												to='catalog/1'
												state='2'
												onClick={() => selectSubCat(51)}>
												Спорт, Охота, Рыбалка
											</Link>
										</div>
									)}
								</div>
								<Link onClick={() => setShowNav(!show)} to='catalog/5'>
									Стекло
								</Link>
								<Link onClick={() => setShowNav(!show)} to='catalog/3'>
									Бронза
								</Link>
								<Link onClick={() => setShowNav(!show)} to='catalog/6'>
									Мебель и зеркала
								</Link>
								<Link onClick={() => setShowNav(!show)} to='catalog/2'>
									Антикварные штопоры и винный антиквариат
								</Link>
								<Link onClick={() => setShowNav(!show)} to='catalog/9'>
									Искусство Востока, Африки и Азии
								</Link>
								<Link onClick={() => setShowNav(!show)} to='catalog/5'>
									Фарфор
								</Link>
								<Link onClick={() => setShowNav(!show)} to='catalog/8'>
									Предметы антикварного декора
								</Link>
							</div>
						</div>
					</div>

					<Link onClick={() => setShowNav(!show)} to='/news'>
						Новости
					</Link>
					<Link onClick={() => setShowNav(!show)} to='/about'>
						О нас
					</Link>
					<Link onClick={() => setShowNav(!show)} to='/contacts'>
						Контакты
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
