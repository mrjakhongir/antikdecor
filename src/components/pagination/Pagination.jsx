import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import './pagination.scss';

function Pagination({
	totalPages,
	setCurrentPage,
	currentPage,
	setSearchParams,
}) {
	function handlePageClick({ selected }) {
		setCurrentPage(selected + 1);
		setSearchParams({ page: currentPage });
	}

	const showNextBtn = currentPage !== totalPages;
	const showPrevBtn = currentPage !== 1;

	return (
		<div>
			<ReactPaginate
				breakLabel={<span className='dots'>...</span>}
				nextLabel={
					showNextBtn && (
						<span className='next-btn'>
							<BsChevronRight />
						</span>
					)
				}
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={totalPages}
				previousLabel={
					showPrevBtn && (
						<span className='next-btn'>
							<BsChevronLeft />
						</span>
					)
				}
				containerClassName='pagination'
				pageClassName='page-btn'
				activeClassName='active-btn'
			/>
		</div>
	);
}

export default Pagination;
