import './reviews.carousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../data.json';
const reviews = data.reviews;

function ReviewsCarousel() {
	return (
		<div className='reviews-carousel'>
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
									<div className='reviews-carousel__card'>
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

export default ReviewsCarousel;
