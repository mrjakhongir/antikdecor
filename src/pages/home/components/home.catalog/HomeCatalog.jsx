import './home.catalog.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const catalog = data.catalog;

function HomeCatalog() {
	return (
		<div className='home-catalog'>
			<div>
				<h2 className='subtitle'>Каталог</h2>
			</div>
			<Swiper
				centeredSlides={true}
				slidesPerView='auto'
				spaceBetween={10}
				loop={true}
				className='home-catalog__carousel'
				breakpoints={{
					640: {
						spaceBetween: 15,
					},
				}}>
				{catalog.map((el) => (
					<SwiperSlide>
						{
							<figure>
								<img src={el.img} alt='case clock' />
								<figcaption>{el.title}</figcaption>
							</figure>
						}
					</SwiperSlide>
				))}
			</Swiper>
			<div className='catalog-grid__medium'>
				{catalog.slice(0, 6).map((el) => (
					<figure className={`${el.imgSize}`}>
						<img src={el.img} alt='case clock' />
						<figcaption>{el.title}</figcaption>
					</figure>
				))}
			</div>
			<div className='catalog-grid__large'>
				{catalog.map((el) => (
					<figure className={`${el.imgSize}`}>
						<img src={el.img} alt='case clock' />
						<figcaption>{el.title}</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
}

export default HomeCatalog;
