import './catalog.grid.scss';
import data from '../../data.json';
import CatalogImg from '../catalogImg/CatalogImg';
import { Link, useLocation } from 'react-router-dom';

const catalog = data.catalog;

function CatalogGrid() {
	const location = useLocation();
	console.log(location.pathname);
	let route = location.pathname === '/' ? 'catalog' : location.pathname;
	return (
		<div className='catalog-grid'>
			{catalog.map((el) => (
				<Link key={el.id} to={`${route}/${el.id}`} className={`${el.imgSize}`}>
					<CatalogImg el={el} />
				</Link>
			))}
		</div>
	);
}

export default CatalogGrid;
