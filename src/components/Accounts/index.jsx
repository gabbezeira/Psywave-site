import { Card } from '@components/Card'
import { MoreCard } from '@components/Card/MoreCard'
import { EmptyState } from '@components/EmptyState'
import AccountsMock from '@mocks/accounts.json'
import { CircleArrowRight as Next, CircleArrowLeft as Prev } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cards, CardsContainer, StyledCategorySection } from './styles'

export function Accounts() {
	const navigate = useNavigate()
	const [currentPages, setCurrentPages] = useState(() =>
		AccountsMock.map(() => 0),
	)
	const [itemsPerPage, setItemsPerPage] = useState(3)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

	const updateItemsPerPage = () => {
		const width = window.innerWidth
		setIsMobile(width <= 768)
		if (width <= 480) {
			setItemsPerPage(1)
		} else if (width <= 768) {
			setItemsPerPage(2)
		} else {
			setItemsPerPage(3)
		}
	}

	useEffect(() => {
		updateItemsPerPage()
		window.addEventListener('resize', updateItemsPerPage)
		return () => window.removeEventListener('resize', updateItemsPerPage)
	}, [])

	const handleNext = (categoryIndex) => {
		setCurrentPages((prev) =>
			prev.map((page, i) =>
				i === categoryIndex
					? Math.min(
							page + 1,
							Math.ceil(
								AccountsMock[categoryIndex].items.length / itemsPerPage,
							) - 1,
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

	const handleMoreClick = (categorySlug) => {
		if (categorySlug) {
			navigate(`/accounts/${categorySlug}`)
		}
	}

	return (
		<>
			{AccountsMock.map((category, categoryIndex) => {
				const limitedItems = category.items.slice(0, 5)
				const hasMoreItems = category.items.length >= 5

				const displayedItems = hasMoreItems
					? isMobile
						? [...category.items.slice(0, 3), { isMoreCard: true }]
						: [...limitedItems, { isMoreCard: true }]
					: limitedItems

				const start = currentPages[categoryIndex] * itemsPerPage
				const end = start + itemsPerPage
				const items = displayedItems.slice(start, end)

				const hasNext = end < displayedItems.length
				const hasPrev = start > 0

				return (
					<StyledCategorySection key={category.slug || categoryIndex}>
						<h1 className="title">{category.title}</h1>
						<Cards $background={category.background}>
							{hasPrev && (
								<Prev
									className={`icon`}
									onClick={() => handlePrev(categoryIndex)}
								/>
							)}
							<CardsContainer>
								{items.length > 0 ? (
									items.map((item, itemIndex) =>
										item.isMoreCard ? (
											<MoreCard
												key={itemIndex}
												onClick={() => {
													handleMoreClick(category.slug)
												}}
											/>
										) : (
											<Card
												key={itemIndex}
												numericId={item.numericId}
												title={item.title}
												price={item.price}
												image={item.image}
												platforms={item.platform}
												categorySlug={category.slug}
											/>
										),
									)
								) : (
									<EmptyState />
								)}
							</CardsContainer>
							{hasNext && (
								<Next
									className={`icon`}
									onClick={() => handleNext(categoryIndex)}
								/>
							)}
						</Cards>
					</StyledCategorySection>
				)
			})}
		</>
	)
}
