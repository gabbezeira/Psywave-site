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
				<Link
					className="button"
					to="https://wa.me/5555179925469?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20contas!"
					target="_blank"
				>
					Como funciona?
				</Link>
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
