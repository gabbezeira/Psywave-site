import { CardFooter, CardImage, PriceContainer, StyledCard } from './styles'

export function Card({ description, platforms, price, image }) {
	return (
		<StyledCard>
			<CardImage src={image} />
			<CardFooter>
				<h1 className="description">{description}</h1>
				<p className="platforms">{platforms.join(', ')}</p>
				<PriceContainer>
					<p className="priceLabel">A partir de</p>
					<button className="price">R${price}</button>
				</PriceContainer>
			</CardFooter>
		</StyledCard>
	)
}
