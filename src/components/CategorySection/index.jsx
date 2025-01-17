import Accounts from '@mocks/accounts.json'
import { CircleArrowRight as Next, CircleArrowLeft as Prev } from 'lucide-react'
import React, { useState } from 'react'
import { Card } from './Card'
import { MoreCard } from './Card/MoreCard'
import {
	Cards,
	CardsContainer,
	EmptyState,
	StyledCategorySection,
	Title,
} from './styles'

export function CategorySection() {
	const [currentPages, setCurrentPages] = useState(() => Accounts.map(() => 0))

	const itemsPerPage = 3

	const handleNext = (categoryIndex) => {
		setCurrentPages((prev) =>
			prev.map((page, i) =>
				i === categoryIndex
					? Math.min(
							page + 1,
							Math.ceil(Accounts[categoryIndex].items.length / itemsPerPage) -
								1,
						)
					: page,
			),
		)
	}

	const handlePrev = (categoryIndex) => {
		setCurrentPages((prev) =>
			prev.map((page, i) =>
				i === categoryIndex ? Math.max(page - 1, 0) : page,
			),
		)
	}

	return (
		<>
			{Accounts.map((category, categoryIndex) => {
				const limitedItems = category.items.slice(0, 8)
				const hasMoreItems = category.items.length >= 8

				const displayedItems = hasMoreItems
					? [...limitedItems, { isMoreCard: true }]
					: limitedItems

				const start = currentPages[categoryIndex] * itemsPerPage
				const end = start + itemsPerPage
				const items = displayedItems.slice(start, end)

				const hasNext = end < displayedItems.length
				const hasPrev = start > 0

				return (
					<StyledCategorySection key={categoryIndex}>
						<Title>{category.title}</Title>
						<Cards $background={category.background}>
							<Prev
								className={`icon ${!hasPrev ? 'disabled' : ''}`}
								onClick={() => hasPrev && handlePrev(categoryIndex)}
							/>
							<CardsContainer>
								{items.length > 0 ? (
									items.map((item, itemIndex) =>
										item.isMoreCard ? (
											<MoreCard key={itemIndex} />
										) : (
											<Card
												key={itemIndex}
												description={item.description}
												price={item.price}
												image={item.image}
												platforms={item.platform}
											/>
										),
									)
								) : (
									<EmptyState>
										Ops... Nenhum item foi encontrado para essa categoria 😢
									</EmptyState>
								)}
							</CardsContainer>
							<Next
								className={`icon ${!hasNext ? 'disabled' : ''}`}
								onClick={() => hasNext && handleNext(categoryIndex)}
							/>
						</Cards>
					</StyledCategorySection>
				)
			})}
		</>
	)
}
