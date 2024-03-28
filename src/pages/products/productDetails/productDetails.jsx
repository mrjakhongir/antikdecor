import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.scss';

import youtubeSmall from '../../../assets/svg/youtube_small.svg';
import { getData } from '../../../utils';
import AddToCartBtn from '../../../components/addToCardBtn/AddToCartBtn';

function ProductDetails() {
	const { id } = useParams();

	const [product, setProduct] = useState({});
	const [openDesc, setOpenDesc] = useState(false);
	const [disabledBtn, setDisabledBtn] = useState(false);

	useEffect(() => {
		async function getProduct(url) {
			const data = await getData(url);
			setProduct(data);
		}

		getProduct(`product/${id}/`);
	}, [id]);

	let hasProduct = false;
	if (product && product.images) {
		hasProduct = true;
	}

	async function addToCart() {
		setDisabledBtn(true);

		if (localStorage.getItem('cartData')) {
			if (JSON.parse(localStorage.getItem('cartData')).length) {
				const data = await JSON.parse(localStorage.getItem('cartData'));
				const idArr = await JSON.parse(localStorage.getItem('idArr'));

				if (!idArr?.includes(product.id)) {
					data.push(product);
					idArr.push(product.id);
					localStorage.setItem('cartData', JSON.stringify(data));
					localStorage.setItem('idArr', JSON.stringify(idArr));
				}
			} else {
				localStorage.setItem('cartData', JSON.stringify([product]));
				localStorage.setItem('idArr', JSON.stringify([product.id]));
			}
		} else {
			localStorage.setItem('cartData', JSON.stringify([product]));
			localStorage.setItem('idArr', JSON.stringify([product.id]));
		}
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
									<img
										src={product.images[1] || product.images[0]}
										alt={product.name}
									/>

									<div>
										{product.video_url ? (
											<img src={youtubeSmall} alt='' />
										) : (
											'No video'
										)}
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
										<span>Название: </span>
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
									<p className='product-price'>
										{product.price
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
										₽
									</p>
									<AddToCartBtn
										product={product}
										disabledBtn={disabledBtn}
										setDisabledBtn={setDisabledBtn}
										func={addToCart}
									/>
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
