import { Button } from '@components'
import { BadgePercent } from 'lucide-react'
import { PromoText, StyledBar } from './styles'

export const PromoBar = () => (
	<StyledBar>
		<PromoText>
			<BadgePercent size={20} />
			Algumas de nossas contas estão em promoção, clique no botão a seguir se
			deseja ver as nossas ofertas!
		</PromoText>
		<Button $borderRadius="0.25rem" padding="0.25rem 0.625rem">
			Ver promoções
		</Button>
	</StyledBar>
)
