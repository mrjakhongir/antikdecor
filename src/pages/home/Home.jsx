import HomeAbout from './components/home.about/HomeAbout';
import HomeCatalog from './components/home.catalog/HomeCatalog';
import HomeWelcome from './components/home.welcome/HomeWelcome';
import './home.scss';

function Home() {
	return (
		<div>
			<HomeWelcome />
			<HomeCatalog />
			<HomeAbout />
		</div>
	);
}

export default Home;
