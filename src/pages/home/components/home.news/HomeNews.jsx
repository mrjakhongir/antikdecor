import './home.news.scss';
import arrowRight from '../../../../assets/svg/arrow_right_accent.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const news = data.news;

function HomeNews() {
	return (
		<div className='home-news'>
			<div>
				<h2 className='subtitle'>Новости</h2>
			</div>
			<div className='home-news__carousel'>
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
					{news.map((el) => (
						<SwiperSlide>
							{
								<div className='home-news__card'>
									<img src={el.img} alt='antikdecor branch' />
									<span>03.06.2014</span>
									<h3>открытие антикварного салона ANTIKDECOR</h3>
									<p>
										Приглашаем всех в гости! Салон работает с понедельника по...{' '}
									</p>
									<div className='home-news__card_footer'>
										<span>Смотреть</span>
										<span>
											<img src={arrowRight} alt='arrow' />
										</span>
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

export default HomeNews;
