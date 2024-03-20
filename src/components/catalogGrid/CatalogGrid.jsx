import './catalog.grid.scss';
import data from '../../data.json';
import CatalogImg from '../catalogImg/CatalogImg';

const catalog = data.catalog;

function CatalogGrid() {
	return (
		<div className='catalog-grid'>
			{catalog.map((el) => (
				<CatalogImg el={el} />
			))}
		</div>
	);
}

export default CatalogGrid;
