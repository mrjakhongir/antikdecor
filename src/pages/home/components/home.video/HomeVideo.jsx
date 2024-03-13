import './home.video.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const videos = data.video;

function HomeVideo() {
	return (
		<div className='home-video'>
			<div>
				<h2 className='subtitle'>Видео</h2>
			</div>
			<div className='home-video__carousel'>
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
					{videos.map((el) => (
						<SwiperSlide>
							{
								<div className='home-video__card'>
									<img src={el.img} alt='' />
								</div>
							}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default HomeVideo;
