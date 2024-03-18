import './catalog.scss';
import data from '../../data.json';
import CatalogGrid from '../../components/catalogGrid/CatalogGrid';
import CatalogImg from '../../components/catalogImg/CatalogImg';
const catalog = data.catalog;

function Catalog() {
	return (
		<div className='catalog'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Каталог</h2>
					<div className='catalog__grid_small'>
						{catalog.map((el) => (
							<CatalogImg el={el} />
						))}
					</div>
					<div className='catalog__grid_large'>
						<CatalogGrid />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Catalog;
