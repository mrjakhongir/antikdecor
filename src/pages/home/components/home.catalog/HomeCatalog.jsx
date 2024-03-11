import './home.catalog.scss';
import catalogImg1 from '../../../../assets/png/catalog_1.png';

function HomeCatalog() {
	return (
		<div className='home-catalog'>
			<h2>Каталог</h2>
			<div className='carousel'>
				<img src={catalogImg1} alt='case clock' />
				<p>ЧАСЫ И НАУЧНЫЕ ПРИБОРЫ</p>
			</div>
			<div className='catalog-grid'></div>
		</div>
	);
}

export default HomeCatalog;
