import { Button } from '@components'
import { Logo, MenuItems, StyledMenu } from './styles'

export const Menu = () => (
	<StyledMenu>
		<Logo />
		<MenuItems>
			<a href="#" to="#inicio">
				Início
			</a>
			<a href="#" to="#sobre-nos">
				Sobre Nós
			</a>
			<a href="#" to="#promocoes">
				Promoções
			</a>
			<a href="#" to="#contato">
				Contato
			</a>
			<Button borderRadius="0.5rem">Contato</Button>
		</MenuItems>
	</StyledMenu>
)
