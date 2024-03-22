import './home.catalog.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
import CatalogGrid from '../../../../components/catalogGrid/CatalogGrid';
import { Link } from 'react-router-dom';
const catalog = data.catalog;

function HomeCatalog() {
	return (
		<div className='home-catalog'>
			<section className='section'>
				<div className='container'>
					<div>
						<h2 className='subtitle'>Каталог</h2>
					</div>
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
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
							<SwiperSlide>
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

					<div className='catalog-grid__large'>
						<CatalogGrid />
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomeCatalog;
