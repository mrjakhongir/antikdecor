import './basket.scss';
import product from '../../assets/png/product_1.png';

function Basket() {
	return (
		<div className='basket'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Корзина</h2>
					<div className='products'>
						<div className='product'>
							<div className='product__details'>
								<img src={product} alt='clock' />

								<div>
									<div>
										<p>
											<span>Арт:</span> F101007A
										</p>
									</div>
									<div>
										<p>
											<span>Название:</span> Часы наручные "Doxa".
										</p>
									</div>
									<div>
										<p>
											<span>Характеристики:</span> Металл, фарфор.
										</p>
									</div>
									<div className='product__price'>17 000 ₽</div>
								</div>
							</div>

							<div className='product__button'>
								<span>17 000 ₽</span>
								<button>Удалить с корзины</button>
							</div>
						</div>
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
