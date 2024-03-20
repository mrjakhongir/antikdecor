import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.scss';

import youtubeSmall from '../../../assets/svg/youtube_small.svg';
import { getData } from '../../../utils';

function ProductDetails() {
	const { id } = useParams();

	const [product, setProduct] = useState();
	const [openDesc, setOpenDesc] = useState(false);

	useEffect(() => {
		async function getProduct(url) {
			const data = await getData(url);
			setProduct(data);
		}
		getProduct(`http://192.168.0.117:8000/products/${id}`);
	}, [id]);

	let hasProduct = false;
	if (product && product.images) {
		hasProduct = true;
	}

	return (
		<div className='product-details'>
			<section className='section'>
				{hasProduct && (
					<div className='container'>
						<h2 className='subtitle'>{product.name}</h2>
						<div className='product-details__wrapper'>
							<div className='product-details__media'>
								<img src={product.images[0]} alt={product.name} />
								<div>
									<img src={product.images[1] || product.images[0]} alt={product.name} />

									<div>
										<img src={youtubeSmall} alt='' />
										{/* {!product.video_url && 'No video'} */}
									</div>
								</div>
							</div>
							<div className='content-wrapper'>
								<img src={product.images[0]} alt={product.name} />
								<div className='product-details__content'>
									<p>
										<span>Арт: </span>
										<span>{product.vendor_code}</span>
									</p>
									<p>
										<span>Название:</span>
										<span>{product.name}</span>
									</p>
									<p>
										<span>История: </span>
										<span>{product.history}</span>
									</p>
									<p>
										<span>Характеристики: </span>
										<span>{product.characteristic}</span>
									</p>
									<p>
										<span>Размер: </span>
										<span>
											диаметр 47 мм, максимальная длина с штатными держателями
											для ремешка 67 мм, ширина с заводной головкой 50 мм,
											толщина 11 мм.
										</span>
									</p>
									<p>
										<span>Описание: </span>
										<br></br>
										<span
											className={`product__description ${
												openDesc && 'open-desc'
											}`}>
											{product.description}
										</span>
									</p>
									<p
										className='read-more'
										onClick={() => setOpenDesc(!openDesc)}>
										{openDesc ? 'Закрыт описание' : 'Читать далее'}
									</p>
									<p className='product-price'>{product.price} ₽</p>
									<button>В корзину</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>
		</div>
	);
}

export default ProductDetails;
