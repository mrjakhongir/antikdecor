import './home.reviews.scss';
import yandexImg from '../../../../assets/svg/yandex.svg';

function HomeReviews() {
	return (
		<div className='home-reviews'>
			<h2 className='subtitle'>Отзывы</h2>
			<div className='home-reviews__card'>
				<img src={yandexImg} alt='yandex' />
			</div>
		</div>
	);
}

export default HomeReviews;
