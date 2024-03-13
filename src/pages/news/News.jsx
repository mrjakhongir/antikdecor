import ContactUs from '../../components/contactUs/ContactUs';
import arrowRight from '../../assets/svg/arrow_right_accent.svg';
import './news.scss';

import data from '../../data.json';
const news = data.news;

function News() {
	return (
		<div className='news'>
			<div>
				<h2 className='subtitle'>Новости</h2>
			</div>
			<div className='news__cards_small'>
				{news.slice(0, 3).map((el) => (
					<div className='news__card'>
						<img src={el.img} alt='antikdecor branch' />
						<div className='news__card_content'>
							<span>03.06.2014</span>
							<h3>открытие антикварного салона ANTIKDECOR</h3>
							<p>
								Приглашаем всех в гости! Салон работает с понедельника по...{' '}
							</p>
							<div className='news__card_footer'>
								<span>Смотреть</span>
								<span>
									<img src={arrowRight} alt='arrow' />
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='news__cards_large'>
				{news.slice(0, 4).map((el) => (
					<div className='news__card'>
						<img src={el.img} alt='antikdecor branch' />
						<div className='news__card_content'>
							<span>03.06.2014</span>
							<h3>открытие антикварного салона ANTIKDECOR</h3>
							<p>
								Приглашаем всех в гости! Салон работает с понедельника по...{' '}
							</p>
							<div className='news__card_footer'>
								<span>Смотреть</span>
								<span>
									<img src={arrowRight} alt='arrow' />
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<ContactUs />
		</div>
	);
}

export default News;
