import './home.3dtur.scss';
import error from '../../../../assets/svg/404.svg';

function Home3dTur() {
	return (
		<div className='home-3dtur'>
			<h2 className='subtitle'>3d тур</h2>
			<div className='home-3dtur__card'>
				<img src={error} alt='404' />
				<p>здесь скоро появится контент</p>
			</div>
		</div>
	);
}

export default Home3dTur;
