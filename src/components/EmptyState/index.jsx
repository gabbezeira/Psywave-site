import { Container } from './styles'

export const EmptyState = ({ bgColor, width }) => (
	<Container $bgColor={bgColor} $width={width}>
		Ops... Nenhum item foi encontrado para essa categoria 😢
	</Container>
)
