import './home.new.products.scss';
import arrowRight from '../../../../assets/svg/arrow_right_gray.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const newProducts = data.newProducts;

function HomeNewProducts() {
	return (
		<div className='home-new-products'>
			<div>
				<h2 className='subtitle'>Новинки</h2>
			</div>
			<div className='home-new-products__carousel'>
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
					{newProducts.map((el) => (
						<SwiperSlide key={el.id}>
							{
								<div className='new-product__card'>
									<img src={el.img} alt='pencil draw' />
									<p>{el.suptitle}</p>
									<h3 className='new-product__card_title'>{el.title}</h3>
									<div className='new-product__card_footer'>
										<div className='new-product__card_price'>{el.price} ₽</div>
										<div className='new-product__card_btn'>
											<span>Смотреть</span>
											<span>
												<img src={arrowRight} alt='arrow' />
											</span>
										</div>
									</div>
								</div>
							}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default HomeNewProducts;
