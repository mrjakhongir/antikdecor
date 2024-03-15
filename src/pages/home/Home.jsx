import ContactUs from '../../components/contactUs/ContactUs';
import ReviewsCarousel from '../../components/reviewsCarousel/ReviewsCarousel';
import VideosCarousel from '../../components/videosCarousel/VideosCarousel';
import Home3dTur from './components/home.3dtur/Home3dTur';
import HomeAbout from './components/home.about/HomeAbout';
import HomeCatalog from './components/home.catalog/HomeCatalog';
import HomeInfo from './components/home.info/HomeInfo';
import HomeNewProducts from './components/home.new.products/HomeNewProducts';
import HomeNews from './components/home.news/HomeNews';
import HomeWelcome from './components/home.welcome/HomeWelcome';
import './home.scss';

function Home() {
	return (
		<div className='home'>
			<HomeWelcome />
			<HomeCatalog />
			<HomeAbout />
			<HomeNewProducts />
			<HomeInfo />
			<Home3dTur />
			<HomeNews />
			<VideosCarousel />
			<ReviewsCarousel />
			<ContactUs />
		</div>
	);
}

export default Home;
