import { Container } from './styles'

import { Accounts } from './AccountPainel'

export function Painel() {
	return (
		<Container>
			<div className="texts">
				<h1 className="title">Gerenciar contas</h1>
			</div>
			<div className="content">
				<Accounts />
			</div>
		</Container>
	)
}
