import './catalog.img.scss';

function CatalogImg({ el }) {
	return (
		<figure>
			<img src={el.img} alt={`${el.title}`} />
			<figcaption>{el.title}</figcaption>
		</figure>
	);
}

export default CatalogImg;
