import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './news.carousel.scss';
import arrowRight from '../../assets/svg/arrow_right_accent.svg';
import { useSelector } from 'react-redux';

function NewsCarousel() {
	const { newsData } = useSelector((state) => state.newsData);
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
						{newsData?.map((el) => (
							<SwiperSlide key={el.id}>
								{
									<Link to={`/news/${el.id}`} className='news__card'>
										<img src={el.image} alt={el.title} />
										<div className='news__card_content'>
											<span>{el.date}</span>
											<h3>{el.title}</h3>
											<p
												className='news__desc'
												dangerouslySetInnerHTML={{ __html: el.content }}
											/>
											<Link to={`/news/${el.id}`} className='news__card_footer'>
												<span>Смотреть</span>
												<span>
													<img src={arrowRight} alt='arrow' />
												</span>
											</Link>
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

export default NewsCarousel;
