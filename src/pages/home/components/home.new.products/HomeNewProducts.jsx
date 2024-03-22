import { useEffect, useState } from 'react';
import './home.new.products.scss';
import arrowRight from '../../../../assets/svg/arrow_right_gray.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { getData } from '../../../../utils';
import { Link } from 'react-router-dom';

function HomeNewProducts() {
	const [newProducts, setNewProducts] = useState([]);

	useEffect(() => {
		async function getNewProducts(url) {
			const data = await getData(url);
			setNewProducts(data);
		}

		getNewProducts('products/new');
	}, []);

	return (
		<div className='home-new-products'>
			<section className='section'>
				<div className='container'>
					<div>
						<h2 className='subtitle'>Новинки</h2>
					</div>

					<Swiper
						centeredSlides={false}
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						breakpoints={{
							768: { slidesPerView: 2 },
							1024: {
								spaceBetween: 15,
								slidesPerView: 3,
							},
							1440: {
								slidesPerView: 4,
								spaceBetween: 24,
							},
						}}>
						{newProducts?.map((el) => (
							<SwiperSlide key={el.id}>
								{
									<Link to={`products/${el.id}`} className='new-product__card'>
										<img src={el.images[0]} alt='pencil draw' />
										<p>{el.suptitle}</p>
										<h3 className='new-product__card_title'>{el.name}</h3>
										<div className='new-product__card_footer'>
											<div className='new-product__card_price'>
												{el.price} ₽
											</div>
											<div className='new-product__card_btn'>
												<span>Смотреть</span>
												<span>
													<img src={arrowRight} alt='arrow' />
												</span>
											</div>
										</div>
									</Link>
								}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</div>
	);
}

export default HomeNewProducts;
