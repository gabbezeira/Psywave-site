import { Button, Loader, Modal } from '@components'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { StyledForm } from './styles'

export const Form = () => {
	const formRef = useRef(null)
	const [isLoading, setIsLoading] = useState(false)
	const [statusMessage, setStatusMessage] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleCloseModal = () => setIsModalOpen(false)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const form = formRef.current
		const nome = form.nome.value.trim()
		const email = form.email.value.trim()
		const mensagem = form.mensagem.value.trim()

		console.log('Nome:', nome, 'Email:', email, 'Mensagem:', mensagem)

		if (!nome || !email || !mensagem) {
			setStatusMessage('alldata')
			setIsModalOpen(true)
			return
		}

		setIsLoading(true)

		try {
			await emailjs.sendForm(
				'service_uc55k8w', // Substitua pelo seu ID de serviço
				'template_dcisjsh', // Substitua pelo seu ID de template
				form,
				'fq4DGFk5MAwDYCyxi', // Substitua pela sua Public Key
			)

			setStatusMessage('success')
			form.reset() // Limpa o formulário após o envio
		} catch (error) {
			console.error('Erro ao enviar:', error)
			setStatusMessage('error')
		} finally {
			setIsLoading(false)
			setIsModalOpen(true)
		}
	}

	return (
		<>
			<StyledForm id="contato">
				<h1 className="formTitle">Fale Conosco</h1>
				<form ref={formRef} className="form" onSubmit={handleSubmit}>
					<div className="topInputs">
						<div className="inputWrapper">
							<p className="label">Nome</p>
							<input
								className="input"
								placeholder="Digite seu nome"
								name="nome"
								required
							/>
						</div>
						<div className="inputWrapper">
							<p className="label">E-mail</p>
							<input
								className="input"
								placeholder="Digite seu e-mail"
								name="email"
								type="email"
								required
							/>
						</div>
					</div>
					<textarea
						className="text-area"
						placeholder="Digite sua mensagem"
						name="mensagem"
						required
					/>
					<Button type="submit" width="100%" disabled={isLoading}>
						{isLoading ? <Loader size={24} /> : 'Enviar'}
					</Button>
				</form>
			</StyledForm>

			{isModalOpen && (
				<Modal onClose={handleCloseModal}>
					{statusMessage === 'success' && (
						<p>Sua mensagem foi enviada com sucesso! Entraremos em contato.</p>
					)}
					{statusMessage === 'error' && (
						<p>
							Ocorreu um erro ao enviar sua mensagem. Tente novamente mais
							tarde.
						</p>
					)}
					{statusMessage === 'alldata' && (
						<p>Por favor, preencha todos os campos.</p>
					)}
				</Modal>
			)}
		</>
	)
}
