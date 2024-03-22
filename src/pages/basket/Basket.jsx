import './basket.scss';

function Basket() {
	const data = JSON.parse(localStorage.getItem('basketData'));

	return (
		<div className='basket'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Корзина</h2>
					<div className='products'>
						{data.map((product) => (
							<div className='product'>
								<div className='product__details'>
									<img src={product.images[0]} alt='clock' />

									<div>
										<div>
											<p>
												<span>Арт:</span> {product.vendor_code}
											</p>
										</div>
										<div>
											<p>
												<span>Название:</span> {product.name}
											</p>
										</div>
										<div>
											<p>
												<span>Характеристики:</span> {product.characteristic}
											</p>
										</div>
										<div className='product__price'>{product.price} ₽</div>
									</div>
								</div>

								<div className='product__button'>
									<span>{product.price} ₽</span>
									<button>Удалить</button>
								</div>
							</div>
						))}
					</div>
					<div className='products__sum'>
						<div>
							<div className='products__sum_info'>
								<span>Сумма заказа:</span>
								<span className='total__price'>17 000 ₽</span>
							</div>
							<button>Оформить заказ</button>
						</div>
						<button>Оформить заказ</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Basket;
