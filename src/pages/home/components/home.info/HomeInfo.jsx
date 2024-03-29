import './home.info.scss';
import experience from '../../../../assets/svg/experience.svg';
import fastService from '../../../../assets/svg/fast_service.svg';
import delivery from '../../../../assets/svg/delivery.svg';
import guest from '../../../../assets/svg/guest.svg';

const info = [
	{
		img: experience,
		title: 'Наш опыт',
		description:
			'Уже более полутора десятка лет специализируется на старых и старинных гравюрах, литографиях, эстампах и печатной графике всех стилей и направлений',
	},
	{
		img: fastService,
		title: 'Быстрое  оформленние',
		description:
			'Гравюры оформлены в паспарту и рамы, можно быстро сделать подарок без поездки к багетчику. Меняем цвет паспарту по желанию покупателя.',
	},
	{
		img: delivery,
		title: 'Доставка в любой город',
		description:
			'доступна почтовая и курьерская отправка предметов в любой город страны.',
	},
	{
		img: guest,
		title: 'Гравюрный кабинет',
		description:
			'здесь вас усадят в кресло, предложат кофе, дадут совет и неспешно покажут то, что вам может подойти и по цене, и по качеству.',
	},
];

function HomeInfo() {
	return (
		<div className='home-info'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Почему нас выбирают?</h2>
					<div className='home-info__cards_wrapper'>
						{info.map((inf) => (
							<div key={inf.title} className='home-info__card'>
								<img src={inf.img} alt='years of experience' />
								<h3>{inf.title}</h3>
								<p>{inf.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomeInfo;
