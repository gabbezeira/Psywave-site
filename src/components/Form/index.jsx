import { Button } from '@components'
import {
	InputWrapper,
	StyledForm,
	StyledInput,
	StyledLabel,
	Title,
} from './styles'

export const Form = () => (
	<StyledForm>
		<Title>Fale Conosco</Title>
		<form className="Form">
			<div className="topInputs">
				<InputWrapper>
					<StyledLabel>Nome</StyledLabel>
					<StyledInput placeholder="Digite seu nome" />
				</InputWrapper>
				<InputWrapper>
					<StyledLabel>Nome</StyledLabel>
					<StyledInput placeholder="Digite seu nome" />
				</InputWrapper>
			</div>
			<textarea className="text-area" />
			<Button width="100%">Enviar</Button>
			<p className="whatsapp">
				Fale conosco no <a>Whatsapp</a>
			</p>
		</form>
	</StyledForm>
)
