import './home.welcome.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import data from '../../../../data.json';
const welcome = data.welcome;

function HomeWelcome() {
	return (
		<div className='home-welcome'>
			<Swiper
				modules={[Pagination, Navigation]}
				centeredSlides={true}
				slidesPerView={1}
				pagination={{ el: '.pagination_small' }}
				loop={true}
				navigation={{
					prevEl: '.pagination_prev_btn',
					nextEl: '.pagination_next_btn',
				}}>
				{welcome.map((el) => (
					<SwiperSlide style={{ backgroundImage: `url(${el.img})` }}>
						<div className='home-welcome__content'>
							<h1>Первый в РосСии гравюрный кабинет</h1>
							<p>
								Открой историю вместе с нами: коллекция антикварных сокровищ
							</p>
							<button>Оставить заявку</button>
						</div>
					</SwiperSlide>
				))}
				<div className='pagination_small'></div>
				<div className='pagination_large'>
					<div className='pagination_prev_btn'>
						<svg
							width='10'
							height='10'
							viewBox='0 0 10 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								className='welcome__polygon'
								d='M8.29995 1.40204L1.6228 5.25709L8.29995 9.11214L8.29995 1.40204Z'
								stroke='white'
							/>
						</svg>
					</div>
					<div className='pagination_next_btn'>
						<svg
							width='10'
							height='10'
							viewBox='0 0 10 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								className='welcome__polygon'
								d='M8.29995 1.40204L1.6228 5.25709L8.29995 9.11214L8.29995 1.40204Z'
								stroke='white'
							/>
						</svg>
					</div>
				</div>
			</Swiper>
		</div>
	);
}

export default HomeWelcome;
