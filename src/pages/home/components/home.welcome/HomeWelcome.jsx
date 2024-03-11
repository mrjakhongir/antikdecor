import './home.welcome.scss';

function HomeWelcome() {
	return (
		<div className='home-welcome'>
			<div className='home-welcome__content'>
				<h1>Первый в РосСии гравюрный кабинет</h1>
				<p>Открой историю вместе с нами: коллекция антикварных сокровищ</p>
				<button>Оставить заявку</button>
			</div>
			<div className='home-welcome__slider'>
				<div className='slider_small'>
					<div className='slider-indicator slider-active'></div>
					<div className='slider-indicator'></div>
					<div className='slider-indicator'></div>
					<div className='slider-indicator'></div>
				</div>
				<div className='slider_large'></div>
			</div>
		</div>
	);
}

export default HomeWelcome;
