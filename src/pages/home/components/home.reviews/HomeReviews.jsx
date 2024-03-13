import './home.reviews.scss';
import yandexImg from '../../../../assets/svg/yandex.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const reviews = data.reviews;

function HomeReviews() {
	return (
		<div className='home-reviews'>
			<div>
				<h2 className='subtitle'>Отзывы</h2>
			</div>
			<div className='home-reviews__carousel'>
				<Swiper
					centeredSlides={true}
					slidesPerView='auto'
					spaceBetween={10}
					loop={true}
					breakpoints={{
						640: {
							spaceBetween: 15,
						},
					}}>
					{reviews.map((el) => (
						<SwiperSlide>
							{
								<div className='home-reviews__card'>
									<img src={el.img} alt='yandex' />
								</div>
							}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default HomeReviews;
