import './news.carousel.scss';
import arrowRight from '../../assets/svg/arrow_right_accent.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../data.json';
import { Link } from 'react-router-dom';
const news = data.news;

function NewsCarousel() {
	return (
		<div className='news-carousel'>
			<section className='section'>
				<div className='container'>
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
								spaceBetween: 24,
							},
						}}>
						{news.map((el) => (
							<SwiperSlide>
								{
									<div className='news__card'>
										<img src={`../${el.img}`} alt='antikdecor branch' />
										<div className='news__card_content'>
											<span>{el.date}</span>
											<h3>{el.title}</h3>
											<p>{el.description}</p>
											<Link to={`/news/${el.id}`} className='news__card_footer'>
												<span>Смотреть</span>
												<span>
													<img src={arrowRight} alt='arrow' />
												</span>
											</Link>
										</div>
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

export default NewsCarousel;
