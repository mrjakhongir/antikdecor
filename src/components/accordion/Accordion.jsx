import { useState } from 'react';
import './accordion.scss';
import { getData } from '../../utils';

function Accordion({
	acc,
	func,
	categoryId,
	catalogId,
	setNextLink,
	setOpenFilterBtn,
}) {
	const { name, subcategories } = acc;

	const [accordionOpen, isAccordionOpen] = useState(true);

	categoryId = categoryId || catalogId;

	async function selectSidebarCart(id) {
		const sidebarSubcategories = document.querySelectorAll(
			'.sidebar-subcategory'
		);
		sidebarSubcategories.forEach((el) => {
			el.classList.remove('active-sidebar-subcategory');
			if (+el.dataset.sidebar === id) {
				el.classList.add('active-sidebar-subcategory');
			}
		});

		const data = await getData(
			`products/?category_id=${categoryId}&sidebar_id=${id}`
		);

		func(data.results);
		setNextLink(data.next);
		if (setOpenFilterBtn) {
			setOpenFilterBtn(false);
		}
	}

	return (
		<div className='accordion'>
			<div
				onClick={() => isAccordionOpen(!accordionOpen)}
				className={`accordion__head ${
					accordionOpen && 'accordion__head--active'
				}`}>
				<h4 className='accordion__title'>{name}</h4>
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
					{subcategories.map((el) => (
						<span
							data-sidebar={el.id}
							className='sidebar-subcategory'
							key={el.id}
							onClick={() => selectSidebarCart(el.id)}>
							{el.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Accordion;
