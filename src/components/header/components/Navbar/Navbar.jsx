import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
import smallLogo from '../../../../assets/svg/antikdecor_logo_small.svg';
import exit from '../../../../assets/svg/exit.svg';
// import { useState } from 'react';

// const categories = [
// 	'Стекло',
// 	'Бронза',
// 	'Мебель и зеркала',
// 	'Антикварные штопоры и винный антиквариат',
// 	'Искусство Востока, Африки и Азии',
// 	'Фарфор',
// 	'Осветительные приборы',
// 	'Предметы антикварного декора',
// ];

function Navbar({ show, func }) {
	// const [openCategory, setOpenCategory] = useState(false);
	return (
		<nav className={`header__nav ${show && 'open-nav'}`}>
			<section className='section'>
				<div className='container'>
					<div className='header__nav_large'>
						<div className='nav__links'>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active-link' : 'nav-link'
								}
								to='/'>
								Главная
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active-link' : 'nav-link'
								}
								to='/catalog'>
								Каталог
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active-link' : 'nav-link'
								}
								to='/news'>
								Новости
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active-link' : 'nav-link'
								}
								to='/about'>
								О нас
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'active-link' : 'nav-link'
								}
								to='/contacts'>
								Контакты
							</NavLink>
						</div>
						<div className='nav__filter'>
							<div>
								<input type='text' placeholder='Поиск по каталогу' />
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
				</div>
			</section>
			<div className='header__nav_small'>
				<div className='nav_small_top'>
					<img src={smallLogo} alt='antikdecor logo' />
					<img onClick={() => func(!show)} src={exit} alt='cross' />
				</div>

				<div className='nav_small_links'>
					<Link onClick={() => func(!show)} to='/'>
						Главная
					</Link>
					<Link onClick={() => func(!show)} to='/catalog'>
						Каталог
					</Link>
					{/* <div className='nav__accordion'>
						<div
							onClick={() => setOpenCategory(!openCategory)}
							className={`accordion-title ${openCategory && 'selected-title'}`}>
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
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>

						<div
							className={`accordion-body ${
								openCategory && 'show-accordion-body'
							}`}>
							<div>
								<div className='accordion-title'>
									<span>Живопись, графика</span>
									<svg
										width='14'
										height='8'
										viewBox='0 0 14 8'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
											stroke='#ea5544'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
								<div className='accordion-title'>
									<span>Гравюры, литографии</span>
									<svg
										width='14'
										height='8'
										viewBox='0 0 14 8'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
											stroke='#ea5544'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
								{categories.map((category) => (
									<Link to='#'>{category}</Link>
								))}
							</div>
						</div>
					</div> */}
					<Link onClick={() => func(!show)} to='/news'>
						Новости
					</Link>
					<Link onClick={() => func(!show)} to='/about'>
						О нас
					</Link>
					<Link onClick={() => func(!show)} to='/contacts'>
						Контакты
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
