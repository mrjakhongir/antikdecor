import './home.about.scss';
import aboutImg from '../../../../assets/png/about_img.png';

function HomeAbout() {
	return (
		<div className='home-about'>
			<div className='home-about__content'>
				<h2 className='subtitle'>о нашей компании</h2>
				<p>
					"Гравюрный кабинет Antikdecor – камерный антикварный магазин в
					старинном доме начала XX века, расположенном на Садовом кольце в
					шаговой доступности от м.Курская.  
				</p>
				<p>
					Уже более полутора десятка лет специализируется на старых и старинных
					гравюрах, литографиях, эстампах и печатной графике всех стилей и
					направлений.
				</p>
				<button>Подробнее о нас</button>
			</div>
			<div className='home-about__carousel'>
				<figure>
					<img src={aboutImg} alt='golden vase' />
					<figcaption>Золотой кувшин рюдрика</figcaption>
				</figure>
				<div className='swiper-btns'></div>
			</div>
		</div>
	);
}

export default HomeAbout;
