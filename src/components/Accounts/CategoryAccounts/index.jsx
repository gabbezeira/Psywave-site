import { Card, EmptyState } from '@/components'
import AccountsMock from '@mocks/accounts.json'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardsContainer, Container } from './styles'

export function CategoryAccounts() {
	const { categorySlug } = useParams()
	const navigate = useNavigate()
	const [category, setCategory] = useState(null)

	useEffect(() => {
		const foundCategory = AccountsMock.find((c) => c.slug === categorySlug)

		if (!foundCategory) {
			navigate('/error', { replace: true })
		} else {
			setCategory(foundCategory)
		}
	}, [categorySlug, navigate])

	if (!category) return null

	const singleItem = category.items.length === 1
	const noItems = category.items.length === 0

	return (
		<Container>
			<h1 className="title">{category.title}</h1>
			<CardsContainer
				$bgimg={category.background}
				singleItem={singleItem || noItems}
			>
				<div className="cards">
					{category.items.length > 0 ? (
						category.items.map((item) => (
							<Card
								key={item.numericId}
								numericId={item.numericId}
								categorySlug={category.slug}
								title={item.title}
								price={item.price}
								image={item.image}
								platforms={item.platform}
							/>
						))
					) : (
						<EmptyState width="70%" />
					)}
				</div>
			</CardsContainer>
		</Container>
	)
}
