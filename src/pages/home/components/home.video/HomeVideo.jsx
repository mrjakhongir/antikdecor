import './home.video.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '../../../../data.json';
const videos = data.video;

function HomeVideo() {
	return (
		<div className='home-video'>
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
			</section>
		</div>
	);
}

export default HomeVideo;
