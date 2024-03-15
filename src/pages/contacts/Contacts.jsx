import './contacts.scss';

import clock from '../../assets/svg/clock.svg';
import phone from '../../assets/svg/phone_white.svg';
import email from '../../assets/svg/envelope.svg';
import ContactUs from '../../components/contactUs/ContactUs';

function Contacts() {
	return (
		<div className='contacts'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Контакты</h2>
					<div className='contacts__moscow'>
						<h3>Москва</h3>

						<div className='contacts__cols'>
							<div className='first-col'>
								<div className='contact'>
									<span>
										<img src={phone} alt='phone' />
									</span>
									<p>
										+7 (919) 966 5430 <span>(Ольга)</span>
									</p>
								</div>
								<div className='contact'>
									<span>
										<img src={email} alt='envelope' />
									</span>
									<p>Z@Antikdecor.ru</p>
								</div>
							</div>
							<div className='second-col'>
								<div className='contact'>
									<span>
										<img src={phone} alt='phone' />
									</span>
									<p>
										+7 (915) 486 5841 <span>(Владимир)</span>
									</p>
								</div>
								<div className='contact'>
									<span>
										<img src={email} alt='envelope' />
									</span>
									<p>V@Antikdecor.ru</p>
								</div>
							</div>
							<div className='third-col'>
								<div className='contact'>
									<span>
										<img src={clock} alt='' />
									</span>
									<p>Часы работы</p>
								</div>
								<div>
									<p>понедельник - пятница с 10:00 до 19:00</p>
									<p>
										суббота, воскресенье - по предварительной договорённости
									</p>
								</div>
							</div>
						</div>

						<address>
							<h4>Гравюрный кабинет ANTIKDECOR:</h4>
							<p>ул. Земляной Вал, дом 18-22, строение 1 (вход</p>
							<p>со стороны Яковоапостольского переулка)</p>
						</address>
					</div>
					<div className='contacts__petersburg'>
						<h3>САНКТ-ПЕТЕРБУРГ</h3>

						<div className='contacts__cols'>
							<div className='contacts__first_col'>
								<div className='contact'>
									<span>
										<img src={phone} alt='phone' />
									</span>
									<p>+7 (911) 755 6793 (Максим)</p>
								</div>
								<div className='contact'>
									<span>
										<img src={email} alt='envelope' />
									</span>
									<p>max@antikdecor.ru</p>
								</div>
							</div>
							<div className='contacts__second_col'>
								<div className='contact'>
									<span>
										<img src={clock} alt='clock' />
									</span>
									<p>Часы работы</p>
								</div>
								<div>
									<p>понедельник - пятница с 10:00 до 19:00</p>
									<p>
										суббота, воскресенье - по предварительной договорённости
									</p>
								</div>
							</div>
						</div>

						<address>
							<h4>Салон-магазин ANTIKDECOR:</h4>
							<p>ул. Кавалергардская, дом 12</p>
						</address>
					</div>
				</div>
			</section>
			<ContactUs />
		</div>
	);
}

export default Contacts;
