import './home.welcome.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import polygonLeft from '../../../../assets/svg/polygon_left.svg';
import polygonRight from '../../../../assets/svg/polygon_right.svg';

import data from '../../../../data.json';
const welcome = data.welcome;

function HomeWelcome() {
	return (
		<div className='home-welcome'>
			<Swiper
				modules={[Pagination, Navigation]}
				centeredSlides={true}
				slidesPerView={1}
				spaceBetween={10}
				pagination={{ el: '.pagination_small', clickable: true }}
				loop={true}
				navigation={{
					prevEl: '.pagination_prev_btn',
					nextEl: '.pagination_next_btn',
				}}>
				{welcome.map((el) => (
					<SwiperSlide>
						<img src={el.img} alt='' />
						<div className='home-welcome__content'>
							<h1>Первый в РосСии гравюрный кабинет</h1>
							<p>
								Открой историю вместе с нами: коллекция антикварных сокровищ
							</p>
							<button>Оставить заявку</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='home-welcome__pagination'>
				<div className='pagination_small'></div>
				<div className='pagination_large'>
					<div className='pagination_prev_btn'>
						<img src={polygonLeft} alt='' />
					</div>
					<div className='pagination_next_btn'>
						<img src={polygonRight} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeWelcome;
