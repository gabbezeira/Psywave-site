import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from './styles'

export const Pagination = (props) => {
	const handleClick = (page) => {
		if (page >= 1 && page <= props.totalPages) {
			props.onPageChange(page)
		}
	}

	return (
		<Container>
			<button
				className="page-button"
				onClick={() => handleClick(props.currentPage - 1)}
				disabled={props.currentPage === 1}
			>
				<ChevronLeft className="icon" />
			</button>
			{[...Array(props.totalPages)].map((_, index) => (
				<button
					className={`page-number ${props.currentPage === index + 1 ? 'active' : ''}`}
					key={index}
					onClick={() => handleClick(index + 1)}
				>
					{index + 1}
				</button>
			))}
			<button
				className="page-button"
				onClick={() => handleClick(props.currentPage + 1)}
				disabled={props.currentPage === props.totalPages}
			>
				<ChevronRight className="icon" />
			</button>
		</Container>
	)
}
