import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export function Card({
	numericId,
	title,
	platforms,
	price,
	image,
	cardBg,
	categorySlug,
}) {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/accounts/${categorySlug}/${numericId}`)
	}

	return (
		<Container $cardBackground={cardBg}>
			<img className="image" src={image} alt="Product" />
			<div className="footer">
				<h1
					className="title"
					onClick={handleNavigate}
					style={{ cursor: 'pointer' }}
				>
					{title}
				</h1>
				<p className="platforms">{platforms.join(', ')}</p>
				<div className="priceContainer">
					<p className="priceLabel">A partir de</p>
					<button className="price">R${price}</button>
				</div>
			</div>
		</Container>
	)
}
