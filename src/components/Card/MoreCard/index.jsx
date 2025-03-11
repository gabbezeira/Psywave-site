import { CirclePlus } from 'lucide-react'
import { StyledMoreCard } from './styles'

export function MoreCard({ onClick }) {
	return (
		<StyledMoreCard onClick={onClick}>
			<CirclePlus className="icon" />
			<p className="moreTitle">Ver todas as contas desse jogo</p>
		</StyledMoreCard>
	)
}
