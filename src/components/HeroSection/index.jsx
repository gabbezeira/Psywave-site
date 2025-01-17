import { Button } from '@components'
import Games from '@mocks/games.json'
import {
	GameImage,
	HeroGamesArea,
	HeroTexts,
	HeroTopArea,
	StyledHeroSection,
} from './styles'

export function HeroSection() {
	return (
		<StyledHeroSection>
			<HeroTopArea>
				<HeroTexts>
					<div className="title">As melhores contas do mercado</div>
					<div className="subtitle">
						Contas de GTA, Forza Horizon, EA FC e muito mais!
					</div>
				</HeroTexts>
				<Button borderRadius="3.125rem" padding="1rem 2rem">
					Como funciona?
				</Button>
			</HeroTopArea>

			<HeroGamesArea>
				{Games.map((game) => (
					<GameImage key={game.id} $image={game.image} alt={game.name} />
				))}
			</HeroGamesArea>
		</StyledHeroSection>
	)
}
