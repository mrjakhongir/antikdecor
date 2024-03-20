import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NewsCarousel from '../newsCarousel/NewsCarousel';
import './news.grid.scss';
import arrowRight from '../../assets/svg/arrow_right_accent.svg';

function NewsGrid() {
	const { newsData } = useSelector((state) => state.newsData);
	return (
		<div className='news-grid'>
			<section className='section'>
				<div className='container'>
					<div className='news-grid__small'>
						{newsData?.slice(0, 3).map((el) => (
							<div className='news__card'>
								<img src={el.image} alt='antikdecor branch' />
								<div className='news__card_content'>
									<span>{el.date}</span>
									<h3>{el.title}</h3>
									<p>{el.description}</p>
									<Link to={`/news/${el.id}`} className='news__card_footer'>
										<span>Смотреть</span>
										<span>
											<img src={arrowRight} alt='arrow' />
										</span>
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className='news-grid__large'>
						<NewsCarousel />
					</div>
				</div>
			</section>
		</div>
	);
}

export default NewsGrid;
