import { Swiper, SwiperSlide } from 'swiper/react';
import './about.scss';

import data from '../../data.json';
import VideosCarousel from '../../components/videosCarousel/VideosCarousel';
import ReviewsCarousel from '../../components/reviewsCarousel/ReviewsCarousel';
import ContactUs from '../../components/contactUs/ContactUs';
const aboutData = data.aboutData;

function About() {
	return (
		<div className='about'>
			<section className='section'>
				<div className='container'>
					<div className='about__text'>
						<h2 className='subtitle'>о нашей компании</h2>
						<p>
							Основное направление компании ANTIKDECOR - дизайнерское оформление
							интерьеров с использованием предметов старины и антиквариата.
						</p>
						<p>
							<span>ANTIKDECOR</span> поможет Вам создать индивидуальный стиль в
							квартире, кабинете, офисе, апартаментах. Великолепно оформленные
							гравюры и литографии, офорты, рисунки; предметы мебели; живопись -
							вся коллекция ANTIKDECOR предназначена для создания уникальных
							интерьеров, современных, модных, с элементами прекрасной
							старины. ANTIKDECOR поможет создать настроение Вам и Вашим любимым
							людям.
						</p>
						<p>
							В нашей коллекции имеются оригинальные антикварные предметы,
							предназначенные стать подарками на любой вкус.
						</p>
					</div>

					<div className='about__info'>
						<h2 className='subtitle'>Как это работает?</h2>
						<p>
							У Вас есть желание сделать интерьер квартиры, дома или офиса
							уютным и комфортным. И Вам необходима помощь профессионального
							дизайнера интерьера.
						</p>
						<p>
							Мы окажем услугу по оформлению Вашего интерьера 
							<span>абсолютно бесплатно!!!</span>
						</p>
					</div>

					<div className='about__info-steps'>
						<div className='info-step'>
							<h3>01</h3>
							<p>
								Мы встречаемся у Вас на объекте обсуждаем и согласовываем
								концепцию оформления.
							</p>
						</div>
						<div className='info-step'>
							<h3>02</h3>
							<p>
								После этого мы совместно с Вами выбираем из каталога ANTIKDECOR
								понравившиеся картины, гравюры, предметы интерьера.
							</p>
						</div>
						<div className='info-step'>
							<h3>03</h3>
							<p>
								Мы привозим выбранные работы на объект (при необходимости
								предварительно оформляем или меняем рамы и паспарту на ранее
								оформленных работах)
							</p>
						</div>
						<div className='info-step'>
							<h3>04</h3>
							<p>
								После Вашего одобрения оформленного интерьера мы оставляем
								работы у Вас и производим расчет за покупку товара.
							</p>
						</div>
					</div>

					<div className='about__info_additional'>
						<p>
							Данная услуга оказывается в <span>Москве</span> и{' '}
							<span>Санкт-Петербурге</span>
							после заключения договора на оказание услуг. Заказчик оплачивает
							транспортные и иные расходы, связанные с транспортировкой
							крупногобаритной мебели и предметов интерьера
						</p>
					</div>

					<Swiper
						className='mySwiper'
						loop={true}
						centeredSlides={true}
						slidesPerView='auto'
						spaceBetween={10}
						breakpoints={{
							768: {
								spaceBetween: 15,
							},
						}}>
						{aboutData.map((el) => (
							<SwiperSlide key={el.id}>
								<img src={el.img} alt={el.title} />
							</SwiperSlide>
						))}
					</Swiper>

					<div className='about__gallery'>
						{aboutData.slice(0, 6).map((el) => (
							<div className={el.imgSize}>
								<img key={el.id} src={el.img} alt={el.title} />
							</div>
						))}
					</div>
				</div>
			</section>
			<VideosCarousel />
			<ReviewsCarousel />
			<ContactUs />
		</div>
	);
}

export default About;
