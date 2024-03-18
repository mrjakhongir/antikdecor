import './catalog.img.scss';

function CatalogImg({ el }) {
	return (
		<figure className={`${el.imgSize}`}>
			<img src={el.img} alt='case clock' />
			<figcaption>{el.title}</figcaption>
		</figure>
	);
}

export default CatalogImg;
