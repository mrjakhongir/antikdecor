import './home.contacts.scss';
import globe from '../../../../assets/png/home_contact.png';

function HomeContacts() {
	return (
		<div className='home-contacts'>
			<h2 className='subtitle'>Обратная связь</h2>
			<div className='home-contacts__content'>
				<form>
					<input type='text' placeholder='Введите имя' />
					<input type='email' placeholder='E-mail' />
					<button>Отправить</button>
					<p>
						Нажимая на кнопку, вы даете согласие на обработку персональных
						данных
					</p>
				</form>
				<img src={globe} alt='globe' />
			</div>
		</div>
	);
}

export default HomeContacts;
