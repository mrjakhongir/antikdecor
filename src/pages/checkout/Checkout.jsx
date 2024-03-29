import { useEffect, useState } from 'react';
import './checkout.scss';

function Checkout() {
	const [cartData, setCartData] = useState([]);
	const [response, setResponse] = useState(false);
	const [customerForm, setCustomerForm] = useState({
		customer_name: '',
		customer_email: '',
		customer_phone: '',
		customer_address: '',
	});

	const products = cartData.map((el) => el.id);

	const total_price = cartData.reduce((acc, product) => {
		return acc + product.price;
	}, 0);

	async function getFromLocalStorage() {
		if (!localStorage.getItem('cartData')) {
		} else {
			if (JSON.parse(localStorage.getItem('cartData')).length) {
				const data = await JSON.parse(localStorage.getItem('cartData'));
				setCartData(data);
			} else {
			}
		}
	}

	useEffect(() => {
		getFromLocalStorage();
	}, []);

	// console.log('order/');

	async function postData(data) {
		const response = await fetch('http://5.35.84.206:8000/order/', {
			method: 'POST',

			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(data),
		});
		return response.json();
	}

	function handleSubmit(e) {
		e.preventDefault();
		const customer = { ...customerForm, total_price, products };

		postData(customer).then((res) => setResponse(res.success));

		setCustomerForm({
			customer_name: '',
			customer_email: '',
			customer_phone: '',
			customer_address: '',
		});
	}

	function handleChange(e) {
		const { name, value } = e.target;

		setCustomerForm((prevForm) => {
			return { ...prevForm, [name]: value };
		});
	}

	return (
		<div className='checkout'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Оформить заказ</h2>

					<div className='checkout__inner'>
						<div className='checkout__products'>
							{cartData.map((product) => (
								<div className='checkout__product' key={product.id}>
									<span>
										<img src={product.images[0]} alt='' />
									</span>
									<h3>{product.name}</h3>
								</div>
							))}
						</div>
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor='name'>Имя:</label>
								<input
									type='text'
									id='name'
									placeholder='Введите имя...'
									required
									name='customer_name'
									value={customerForm.customer_name}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor='email'>Почта:</label>
								<input
									type='email'
									id='email'
									placeholder='Введите почту...'
									required
									name='customer_email'
									value={customerForm.customer_email}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor='phone'>Тел:</label>
								<input
									type='tel'
									id='phone'
									placeholder='Введите тел...'
									required
									name='customer_phone'
									value={customerForm.customer_phone}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor='address'>Адрес:</label>
								<input
									type='text'
									id='address'
									placeholder='Введите адрес...'
									required
									name='customer_address'
									value={customerForm.customer_address}
									onChange={handleChange}
								/>
							</div>
							{response && (
								<p className='response-message'>
									Спасибо за заполнение формы! Ваши данные получены и будут
									обработаны в ближайшее время. Мы скоро вам перезвоним.
								</p>
							)}
							{response ? '' : <button>Оформить</button>}
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Checkout;
