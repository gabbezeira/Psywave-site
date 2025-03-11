import ErrorImage from '@assets/404.svg'
import { Container } from './styles'

export function Errors() {
	return (
		<Container>
			<img
				className="error-image"
				src={ErrorImage}
				alt="Erro 404 - Página não encontrada"
			/>
			<h1 className="title">A página não foi encontrada</h1>
		</Container>
	)
}
