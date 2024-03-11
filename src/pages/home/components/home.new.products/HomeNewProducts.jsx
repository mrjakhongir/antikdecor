import './home.new.products.scss';
import newProduct1 from '../../../../assets/png/new_product_1.png';
import arrowRight from '../../../../assets/svg/arrow_right_gray.svg';

function HomeNewProducts() {
	return (
		<div className='home-new-products'>
			<h2 className='subtitle'>Новинки</h2>

			<div className='new-product__card'>
				<img src={newProduct1} alt='pencil draw' />
				<p>Живопись графика рисунок</p>
				<h3 className='new-product__card_title'>
					Карандашный портрет молодой женщины в профиль
				</h3>
				<div className='new-product__card_footer'>
					<div className='new-product__card_price'>17 000 ₽</div>
					<div className='new-product__card_btn'>
						<span>Смотреть</span>
						<span>
							<img src={arrowRight} alt='arrow' />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeNewProducts;
