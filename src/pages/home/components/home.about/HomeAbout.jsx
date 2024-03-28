import './home.about.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import data from '../../../../data.json';
import { Link } from 'react-router-dom';
const aboutData = data.aboutData;
function HomeAbout() {
	return (
		<div className='home-about'>
			<section className='section'>
				<div className='container'>
					<div className='home-about__content'>
						<h2 className='subtitle'>о нашей компании</h2>
						<p>
							"Гравюрный кабинет <span>Antikdecor</span> – камерный антикварный
							магазин в старинном доме начала XX века, расположенном на Садовом
							кольце в шаговой доступности от м.Курская.  
						</p>
						<p>
							Уже более полутора десятка лет специализируется на старых и
							старинных гравюрах, литографиях, эстампах и печатной графике всех
							стилей и направлений.
						</p>
						<Link to='/about'>Подробнее о нас</Link>
					</div>
					<div className='home-about__carousel'>
						<Swiper
							modules={[Navigation]}
							centeredSlides={true}
							slidesPerView='auto'
							spaceBetween={19}
							loop={true}
							navigation={{
								prevEl: '.prev-btn',
								nextEl: '.next-btn',
							}}
							breakpoints={{
								640: { spaceBetween: 30 },
								920: {
									centeredSlides: false,
									spaceBetween: 12,
								},
							}}>
							{aboutData.map((el) => (
								<SwiperSlide>
									<figure>
										<img src={el.img} alt='golden vase' />
										<figcaption>{el.title}</figcaption>
									</figure>
								</SwiperSlide>
							))}
						</Swiper>
						<div className='swiper-btns'>
							<div className='prev-btn'>
								<svg
									width='34'
									height='20'
									viewBox='0 0 36 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										className='arrow'
										d='M1.11612 10.8839C0.62796 10.3957 0.62796 9.60427 1.11612 9.11611L9.07107 1.16116C9.55922 0.673008 10.3507 0.673008 10.8388 1.16116C11.327 1.64932 11.327 2.44077 10.8388 2.92893L3.76777 10L10.8388 17.0711C11.327 17.5592 11.327 18.3507 10.8388 18.8388C10.3507 19.327 9.55922 19.327 9.07107 18.8388L1.11612 10.8839ZM36 11.25L2 11.25L2 8.75L36 8.75L36 11.25Z'
										fill='#9B9B9B'
									/>
								</svg>
							</div>
							<div className='next-btn'>
								<svg
									width='34'
									height='20'
									viewBox='0 0 36 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										className='arrow'
										d='M34.8839 10.8839C35.372 10.3957 35.372 9.60427 34.8839 9.11611L26.9289 1.16116C26.4408 0.673008 25.6493 0.673008 25.1612 1.16116C24.673 1.64932 24.673 2.44077 25.1612 2.92893L32.2322 10L25.1612 17.0711C24.673 17.5592 24.673 18.3507 25.1612 18.8388C25.6493 19.327 26.4408 19.327 26.9289 18.8388L34.8839 10.8839ZM1.09278e-07 11.25L34 11.25L34 8.75L-1.09278e-07 8.75L1.09278e-07 11.25Z'
										fill='#9B9B9B'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomeAbout;
