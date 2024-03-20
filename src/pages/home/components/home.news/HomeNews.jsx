import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { newsData } from '../../../../redux/newsSlice';

import NewsCarousel from '../../../../components/newsCarousel/NewsCarousel';
import './home.news.scss';

import { getData } from '../../../../utils';

function HomeNews() {
	const dispatch = useDispatch();

	useEffect(() => {
		async function getNews(url) {
			const res = await getData(url);
			dispatch(newsData(res));
		}

		getNews('http://192.168.0.117:8000/news/');
	}, [dispatch]);

	return (
		<div className='home-news'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Новости</h2>
				</div>
			</section>
			<NewsCarousel />
		</div>
	);
}

export default HomeNews;
