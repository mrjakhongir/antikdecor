import { useState } from 'react';
import './accordion.scss';

function Accordion({ acc }) {
	const { title, accItems } = acc;
	const [accordionOpen, isAccordionOpen] = useState(false);
	return (
		<div className='accordion'>
			<div
				onClick={() => isAccordionOpen(!accordionOpen)}
				className={`accordion__head ${
					accordionOpen && 'accordion__head--active'
				}`}>
				<h4 className='accordion__title'>{title}</h4>
				<svg
					className='caret'
					width='14'
					height='8'
					viewBox='0 0 14 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						className='caret__color'
						d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
						stroke='#474747'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
			<div className={`accordion__body ${accordionOpen && 'accordion-open'} `}>
				<div>
					{accItems.map((el) => (
						<span>{el}</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Accordion;
