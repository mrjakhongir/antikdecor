import './home.contacts.scss';
import globe from '../../../../assets/png/home_contact.png';

function HomeContacts() {
	return (
		<div className='home-contacts'>
			<h2 className='subtitle'>Обратная связь</h2>
			<div className='home-contacts__content'>
				<div className='home-contacts__left'>
					<h2 className='subtitle subtitle-large'>Обратная связь</h2>
					<form>
						<input type='text' placeholder='Введите имя' />
						<input type='email' placeholder='E-mail' />
						<button>Отправить</button>
					</form>
					<p>
						Нажимая на кнопку, вы даете согласие на обработку персональных
						данных
					</p>
				</div>
				<div className='home-contacts__right'>
					<img src={globe} alt='globe' />
				</div>
			</div>
		</div>
	);
}

export default HomeContacts;
