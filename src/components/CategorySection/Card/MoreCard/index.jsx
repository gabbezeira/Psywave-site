import { CirclePlus } from 'lucide-react'
import { StyledMoreCard } from './styles'

export function MoreCard() {
	return (
		<StyledMoreCard>
			<CirclePlus className="icon" />
			<p className="title">Ver todas as contas desse jogo</p>
		</StyledMoreCard>
	)
}
