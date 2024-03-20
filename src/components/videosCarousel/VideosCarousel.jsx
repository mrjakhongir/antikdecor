import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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

		getVideos('http://192.168.0.117:8000/videos/');
	}, []);

	return (
		<div className='videos-carousel'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Видео</h2>
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
				</div>
			</section>
		</div>
	);
}

export default VideosCarousel;
