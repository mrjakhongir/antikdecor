import { useEffect, useState } from 'react';
import './cart.scss';

function Cart() {
	const [cartData, setCartData] = useState([]);

	const totalSum = cartData.reduce((acc, product) => {
		return acc + product.price;
	}, 0);

	async function getFromLocalStorage() {
		const data = await JSON.parse(localStorage.getItem('cartData'));
		setCartData(data);
	}
	useEffect(() => {
		getFromLocalStorage();
	}, []);

	function deleteProduct(id) {
		let deleteIndex;
		cartData.map((el, index) => {
			if (el.id === id) {
				deleteIndex = index;
			}
			return 0;
		});

		cartData.splice(deleteIndex, 1);
		localStorage.clear();
		localStorage.setItem('cartData', JSON.stringify(cartData));
		getFromLocalStorage();
	}

	return (
		<div className='cart'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Корзина</h2>
					<div className='products'>
						{cartData.length ? (
							cartData.map((product) => (
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
											<div className='product__price'>
												{product.price
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
												₽
											</div>
										</div>
									</div>

									<div className='product__button'>
										<span>
											{product.price
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
											₽
										</span>
										<button onClick={() => deleteProduct(product.id)}>
											Удалить
										</button>
									</div>
								</div>
							))
						) : (
							<h1 className='product'>Нет добавленний продукт.</h1>
						)}
					</div>
					<div className='products__sum'>
						<div>
							<div className='products__sum_info'>
								<span>Сумма заказа:</span>
								<span className='total__price'>
									{totalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽
								</span>
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

export default Cart;
