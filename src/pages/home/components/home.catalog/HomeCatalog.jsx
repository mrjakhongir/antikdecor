import './home.catalog.scss';
import catalogImg1 from '../../../../assets/png/catalog_1.png';

function HomeCatalog() {
	return (
		<div className='home-catalog'>
			<h2 className='subtitle'>Каталог</h2>
			<div className='home-catalog__carousel'>
				<figure>
					<img src={catalogImg1} alt='case clock' />
					<figcaption>ЧАСЫ И НАУЧНЫЕ ПРИБОРЫ</figcaption>
				</figure>
			</div>
			<div className='catalog-grid'></div>
		</div>
	);
}

export default HomeCatalog;
