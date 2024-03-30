import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import arrow_white from '../../assets/svg/arrow_white.svg';

import './videos.carousel.scss';
import 'swiper/css';

import youtube from '../../assets/svg/youtube_small.svg';
import { getData } from '../../utils';

function VideosCarousel() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function getVideos(url) {
			const data = await getData(url);
			setVideos(data);
		}

		getVideos('videos/');
	}, []);

	return (
		<div className='videos-carousel'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Видео</h2>
					<Swiper
						modules={[Navigation]}
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						navigation={{
							prevEl: '.prev_btn_video',
							nextEl: '.next_btn_video',
						}}
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
						{videos?.map((el) => (
							<SwiperSlide key={el.id}>
								{
									<a
										href={`${el.url}&autoplay=1`}
										target='blank'
										className='videos-carousel__card'>
										<img src={el.banner} alt={el.title} />
										<span>
											<img src={youtube} alt='' />
										</span>
										<h3>{el.title}</h3>
									</a>
								}
							</SwiperSlide>
						))}
					</Swiper>
					<div className='navigation_mobile'>
						<button className='prev_btn prev_btn_video'>
							<img src={arrow_white} alt='arrow' />
						</button>
						<button className='next_btn next_btn_video'>
							<img src={arrow_white} alt='arrow' />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default VideosCarousel;
