import './contact.us.scss';
import globe from '../../assets/png/home_contact.png';

function ContactUs() {
	return (
		<div className='home-contacts'>
			<section className='section'>
				<div className='container'>
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
			</section>
		</div>
	);
}

export default ContactUs;
