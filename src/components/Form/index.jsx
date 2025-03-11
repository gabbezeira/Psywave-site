import { Button } from '@components'
import { StyledForm } from './styles'

export const Form = () => (
	<StyledForm id="contato">
		<h1 className="formTitle">Fale Conosco</h1>
		<form className="form">
			<div className="topInputs">
				<div className="inputWrapper">
					<p className="label">Nome</p>
					<input className="input" placeholder="Digite seu nome" />
				</div>
				<div className="inputWrapper">
					<p className="label">Nome</p>
					<input className="input" placeholder="Digite seu nome" />
				</div>
			</div>
			<textarea className="text-area" />
			<Button type="submit" width="100%">
				Enviar
			</Button>
			<p className="whatsapp">
				Fale conosco no <a>Whatsapp</a>
			</p>
		</form>
	</StyledForm>
)
