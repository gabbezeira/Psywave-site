import SendSuccess from '@assets/email.svg'
import SendError from '@assets/warning.svg'
import { Loader, Modal } from '@components'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { StyledForm } from './styles'

export const Form = () => {
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		mensagem: '',
	})
	const [isLoading, setIsLoading] = useState(false)
	const [statusMessage, setStatusMessage] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleCloseModal = () => setIsModalOpen(false)

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const { nome, email, mensagem } = formData

		if (!nome.trim() || !email.trim() || !mensagem.trim()) {
			setStatusMessage('alldata')
			setIsModalOpen(true)
			return
		}

		setIsLoading(true)

		try {
			await emailjs.send(
				'service_uc55k8w',
				'template_dcisjsh',
				{
					nome,
					email,
					mensagem,
				},
				'fq4DGFk5MAwDYCyxi',
			)

			setStatusMessage('success')
			setFormData({ nome: '', email: '', mensagem: '' })
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
				<form onSubmit={handleSubmit} className="form">
					<div className="topInputs">
						<div className="inputWrapper">
							<p className="label">Nome</p>
							<input
								className="input"
								placeholder="Digite seu nome"
								name="nome"
								value={formData.nome}
								onChange={handleInputChange}
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
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
					<textarea
						className="text-area"
						placeholder="Digite sua mensagem"
						name="mensagem"
						value={formData.mensagem}
						onChange={handleInputChange}
						required
					/>
					<div className="buttonWrapper">
						<button type="submit" disabled={isLoading} className="button">
							{isLoading ? <Loader size={24} /> : 'Enviar'}
						</button>
					</div>
				</form>
			</StyledForm>

			{isModalOpen && (
				<Modal onClose={handleCloseModal}>
					{statusMessage === 'success' && (
						<>
							<img
								src={SendSuccess}
								className="image"
								alt="imagem de sucesso ao enviar email"
							/>
							<p className="text">
								Sua solicitação foi enviada com sucesso. Entraremos em contato!
							</p>
						</>
					)}

					{statusMessage === 'error' && (
						<>
							<img
								src={SendError}
								className="image"
								alt="imagem de erro ao enviar email"
							/>
							<p>
								Ocorreu um erro ao tentar enviar sua mensagem. Por favor, tente
								novamente.
							</p>
						</>
					)}

					{statusMessage === 'alldata' && (
						<>
							<img
								src={SendError}
								className="image"
								alt="imagem de erro ao enviar email"
							/>
							<p>Preencha todos os campos do formulário corretamente!</p>
						</>
					)}
				</Modal>
			)}
		</>
	)
}
