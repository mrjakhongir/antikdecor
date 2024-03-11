import './home.news.scss';
import newsImg from '../../../../assets/png/news_1.png';
import arrowRight from '../../../../assets/svg/arrow_right_accent.svg';

function HomeNews() {
	return (
		<div className='home-news'>
			<h2 className='subtitle'>Новости</h2>
			<div className='home-news__card'>
				<img src={newsImg} alt='antikdecor branch' />
				<span>03.06.2014</span>
				<h3>открытие антикварного салона ANTIKDECOR</h3>
				<p>Приглашаем всех в гости! Салон работает с понедельника по... </p>
				<div className='home-news__card_footer'>
					<span>Смотреть</span>
					<span>
						<img src={arrowRight} alt='arrow' />
					</span>
				</div>
			</div>
		</div>
	);
}

export default HomeNews;
