import './home.reviews.scss';
import yandexImg from '../../../../assets/svg/yandex.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const reviews = data.reviews;

function HomeReviews() {
	return (
		<div className='home-reviews'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Отзывы</h2>

					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
							1440: {
								slidesPerView: 4,
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
			</section>
		</div>
	);
}

export default HomeReviews;
