import { Button } from '@components'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { StyledForm } from './styles'

export const Form = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [statusMessage, setStatusMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData(e.target)
		const nome = formData.get('nome')
		const email = formData.get('email')
		const mensagem = formData.get('mensagem')

		if (!nome.trim() || !email.trim() || !mensagem.trim()) {
			setStatusMessage('Por favor, preencha todos os campos.')
			return
		}

		setIsLoading(true)

		emailjs
			.send(
				'service_uc55k8w',
				'template_j59osij',
				{
					nome,
					email,
					mensagem,
				},
				'fq4DGFk5MAwDYCyxi', // User ID (substitua pelo seu)
			)
			.then(
				(result) => {
					setIsLoading(false)
					setStatusMessage(
						'Sua mensagem foi enviada com sucesso! Entraremos em contato.',
					)
				},
				(error) => {
					setIsLoading(false)
					setStatusMessage(
						'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
					)
				},
			)
	}

	return (
		<StyledForm id="contato" onSubmit={handleSubmit}>
			<h1 className="formTitle">Fale Conosco</h1>
			<form className="form">
				<div className="topInputs">
					<div className="inputWrapper">
						<p className="label">Nome</p>
						<input
							className="input"
							placeholder="Digite seu nome"
							name="nome"
						/>
					</div>
					<div className="inputWrapper">
						<p className="label">E-mail</p>
						<input
							className="input"
							placeholder="Digite seu e-mail"
							name="email"
						/>
					</div>
				</div>
				<div className="inputWrapper">
					<p className="label">Mensagem</p>
					<textarea
						className="text-area"
						placeholder="Digite sua mensagem"
						name="mensagem"
					/>
				</div>
				<Button type="submit" width="100%" disabled={isLoading}>
					{isLoading ? 'Enviando...' : 'Enviar'}
				</Button>
				<p className="whatsapp">
					Fale conosco no{' '}
					<a
						href="https://wa.me/5534997330203"
						target="_blank"
						rel="noreferrer"
					>
						Whatsapp
					</a>
				</p>
			</form>

			{statusMessage && <p className="statusMessage">{statusMessage}</p>}
		</StyledForm>
	)
}
