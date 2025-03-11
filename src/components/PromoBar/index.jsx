import { Button } from '@components'
import { BadgePercent } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StyledBar } from './styles'

export const PromoBar = () => (
	<StyledBar>
		<div className="promoText">
			<BadgePercent size={20} />
			Algumas de nossas contas estão em promoção, clique no botão a seguir se
			deseja ver as nossas ofertas!
		</div>
		<Link className="button" to="/accounts/gta-online">
			Ver ofertas
		</Link>
	</StyledBar>
)
