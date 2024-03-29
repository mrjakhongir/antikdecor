import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import './home.welcome.scss';
import 'swiper/css';

import { getData } from '../../../../utils';

function HomeWelcome() {
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		async function getBanners(url) {
			const res = await getData(url);
			setBanners(res);
		}

		getBanners('banners/');
	}, []);

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
				{banners?.map((el, index) => (
					<SwiperSlide
						key={index}
						style={{ backgroundImage: `url(${el.image})` }}>
						<div className='home-welcome__content'>
							<h1>{el.title}</h1>
							<p>{el.subtitle}</p>
							<a href='#contact'>Оставить заявку</a>
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
