import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './home.catalog.scss';

import arrow_white from '../../../../assets/svg/arrow_white.svg';

import data from '../../../../data.json';
import CatalogGrid from '../../../../components/catalogGrid/CatalogGrid';
const catalog = data.catalog;

function HomeCatalog() {
	return (
		<div id='homeCatalog' className='home-catalog'>
			<section className='section'>
				<div className='container'>
					<div>
						<h2 className='subtitle'>Каталог</h2>
					</div>
					<Swiper
						modules={[Navigation]}
						slidesPerView={1}
						spaceBetween={10}
						navigation={{
							prevEl: '.prev_btn_catalog',
							nextEl: '.next_btn_catalog',
						}}
						loop={true}
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1025: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
						}}>
						{catalog.map((el) => (
							<SwiperSlide key={el.id}>
								{
									<Link to={`catalog/${el.id}`}>
										<figure>
											<img src={el.img} alt='case clock' />
											<figcaption>{el.title}</figcaption>
										</figure>
									</Link>
								}
							</SwiperSlide>
						))}
					</Swiper>
					<div className='navigation_mobile'>
						<button className='prev_btn prev_btn_catalog'>
							<img src={arrow_white} alt='arrow' />
						</button>
						<button className='next_btn next_btn_catalog'>
							<img src={arrow_white} alt='arrow' />
						</button>
					</div>

					<div className='catalog-grid__large'>
						<CatalogGrid />
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomeCatalog;
