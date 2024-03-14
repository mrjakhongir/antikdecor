import './news.scss';
import ContactUs from '../../components/contactUs/ContactUs';
import NewsGrid from '../../components/newsGrid/NewsGrid';

function News() {
	return (
		<div className='news'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Новости</h2>
				</div>
			</section>
			<NewsGrid />
			<ContactUs />
		</div>
	);
}

export default News;
