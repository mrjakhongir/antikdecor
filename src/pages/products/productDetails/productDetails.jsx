import { useParams } from 'react-router-dom';
import './productDetails.scss';
import data from '../../../data.json';
import youtubeSmall from '../../../assets/svg/youtube_small.svg';

function ProductDetails() {
	const { id } = useParams();
	const selectedProduct = data.clocks.find((product) => +id === product.id);
	return (
		<div className='product-details'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>{selectedProduct.title}</h2>
					<div className='product-details__wrapper'>
						<div className='product-details__media'>
							<img
								src={`../${selectedProduct.img}`}
								alt={selectedProduct.title}
							/>
							<div>
								<img
									src={`../${selectedProduct.add_img}`}
									alt={selectedProduct.title}
								/>
								<div>
									<img src={youtubeSmall} alt='' />
								</div>
							</div>
						</div>
						<div className='content-wrapper'>
							<img
								src={`../${selectedProduct.img}`}
								alt={selectedProduct.title}
							/>
							<div className='product-details__content'>
								<p>
									<span>Арт: </span>
									<span>{selectedProduct.art}</span>
								</p>
								<p>
									<span>Название:</span>
									<span>{selectedProduct.title}</span>
								</p>
								<p>
									<span>История: </span>
									<span>{selectedProduct.history}</span>
								</p>
								<p>
									<span>Характеристики: </span>
									<span>{selectedProduct.characteristics}</span>
								</p>
								<p>
									<span>Размер: </span>
									<span>
										диаметр 47 мм, максимальная длина с штатными держателями для
										ремешка 67 мм, ширина с заводной головкой 50 мм, толщина 11
										мм.
									</span>
								</p>
								<p>
									<span>Описание: </span>
									<span>
										Большие наручные часы в никелированном корпусе с
										оригинальным эмалевым циферблатом в стиле Art Deco с
										градацией 5 минут....{' '}
									</span>
								</p>
								<p className='read-more'>Читать далее</p>
								<p className='product-price'>{selectedProduct.price} ₽</p>
								<button>В корзину</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ProductDetails;
