import accounts from '@/mocks/accounts.json'
import { Loader } from '@components'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles'

export function Details() {
	const { categorySlug, numericId } = useParams()
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		console.log('Categoria e Numeric ID recebidos:', categorySlug, numericId)

		const fetchProduct = () => {
			let selectedProduct = null

			accounts.forEach((account) => {
				if (account.slug === categorySlug) {
					const foundItem = account.items.find(
						(item) => Number(item.numericId) === Number(numericId),
					)
					if (foundItem) {
						selectedProduct = {
							...foundItem,
							background: account.background,
						}
					}
				}
			})

			if (selectedProduct) {
				setProduct(selectedProduct)
			} else {
				setError('Produto não encontrado')
			}
			setLoading(false)
		}

		if (numericId) {
			fetchProduct()
		} else {
			setError('ID inválido')
			setLoading(false)
		}
	}, [categorySlug, numericId])

	const whatsappMessage = product
		? `Quero comprar a conta "${encodeURIComponent(product.title)}" por R$${encodeURIComponent(product.price)}`
		: ''
	const whatsappUrl = `https://wa.me/5517992546927?text=${whatsappMessage}`

	if (loading) {
		return <Loader />
	}

	if (error) {
		return <p>{error}</p>
	}

	if (!product) {
		return <p>Produto não encontrado.</p>
	}

	return (
		<Container>
			<div className="detailsArea">
				<div className="imageArea">
					<img src={product.image} alt={product.title} className="image" />
				</div>
				<div className="content">
					<div className="header">
						<div className="texts">
							<h1 className="title">{product.title}</h1>
							<p className="platforms">
								{product.platform.map((platform, index) => (
									<span key={index} className="platformItem">
										{platform}
										{index < product.platform.length - 1 && ', '}
									</span>
								))}
							</p>
							<p className="games">{`Game: ${product.game}`}</p>
						</div>
						<a
							href={whatsappUrl}
							className="priceButton"
							target="_blank"
							rel="noopener noreferrer"
						>
							{`Comprar por R$ ${product.price}`}
						</a>
					</div>
					<p className="descriptionText">Descrição da Conta:</p>
					<div className="infoArea">{product.description}</div>
				</div>
			</div>
		</Container>
	)
}
