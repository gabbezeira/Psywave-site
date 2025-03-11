import { Button } from '@components'
import Games from '@mocks/games.json'
import { Link } from 'react-router-dom'
import { GameImage, StyledHeroSection } from './styles'

export function HeroSection() {
	return (
		<StyledHeroSection>
			<div className="heroTopArea">
				<div className="heroTexts">
					<div className="title">As melhores contas do mercado</div>
					<div className="subtitle">
						Contas de GTA, Forza Horizon, EA FC e muito mais!
					</div>
				</div>
				<Button borderRadius="3.125rem" padding="1rem 2rem">
					Como funciona?
				</Button>
			</div>

			<div className="heroGamesArea">
				{Games.map((game) => (
					<Link className="link" key={game.id} to={`/accounts/${game.slug}`}>
						<GameImage $image={game.image} alt={game.gameName} />
					</Link>
				))}
			</div>
		</StyledHeroSection>
	)
}
