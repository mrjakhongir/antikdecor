import { useParams } from 'react-router-dom';

import './newsDetail.scss';
import data from '../../../data.json';
import NewsGrid from '../../../components/newsGrid/NewsGrid';

const news = data.news;

function NewsDetail() {
	const { id } = useParams();
	const selectedNew = news.find((el) => el.id === +id);

	return (
		<div className='news-detail'>
			<section className='section'>
				<div className='container'>
					<div className='selected-news'>
						<div className='selected-news__content'>
							<span>{selectedNew.date}</span>
							<h1 className='subtitle'>{selectedNew.title}</h1>
							{selectedNew.text.map((el) => (
								<p>{el}</p>
							))}
						</div>
						<div className='selected-news__img'>
							<img src={`../${selectedNew.img}`} alt='' />
							<h2>{selectedNew.imgCaption}</h2>
						</div>
					</div>

					<h2 className='subtitle'>другие Новости</h2>
					<NewsGrid />
				</div>
			</section>
		</div>
	);
}

export default NewsDetail;
