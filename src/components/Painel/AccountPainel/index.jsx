import Trash from '@assets/warning.svg'
import { Loader, Modal } from '@components'
import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { Pagination } from '@components/Pagination'
import { NotificationContext } from '@context/NotificationContext'
import axios from 'axios'
import { CirclePlus, Search } from 'lucide-react'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card } from './Card'
import { Container } from './styles'

export function Accounts() {
	const [search, setSearch] = useState('')
	const [accounts, setAccounts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedCardId, setSelectedCardId] = useState(null)
	const [isModalOpen, setModalOpen] = useState(false)
	const itemsPerPage = 4

	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const selectedGame = query.get('game')

	const { showSnackbar } = useContext(NotificationContext)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	useEffect(() => {
		const fetchAccounts = async () => {
			try {
				const response = await axios.get(
					'https://kadynn-api.vercel.app/accounts',
				)
				if (Array.isArray(response.data)) {
					setAccounts(response.data)
				} else {
					throw new Error('Resposta inesperada da API')
				}
			} catch (err) {
				setError('Erro ao carregar contas')
			} finally {
				setLoading(false)
			}
		}

		fetchAccounts()
	}, [])

	const filteredAccounts = selectedGame
		? accounts.filter((account) => account.game.includes(selectedGame))
		: accounts

	const searchFilteredAccounts = filteredAccounts.filter((account) =>
		account.title.toLowerCase().includes(search.toLowerCase()),
	)

	const totalPages = Math.ceil(searchFilteredAccounts.length / itemsPerPage)

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	const paginatedAccounts = searchFilteredAccounts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

	useEffect(() => {
		setCurrentPage(1)
	}, [selectedGame, search])

	const handleDeleteClick = (id) => {
		setSelectedCardId(id)
		setModalOpen(true)
	}

	const handleDelete = async (id) => {
		try {
			const token = localStorage.getItem('@Auth:token')
			await axios.delete(`https://kadynn-api.vercel.app/accounts/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			setAccounts(accounts.filter((account) => account.numericId !== id))
			showSnackbar('Conta excluída com sucesso!', 'success')
		} catch (err) {
			showSnackbar('Erro ao excluir conta: ' + err.message, 'error')
		} finally {
			setModalOpen(false)
		}
	}

	return (
		<Container>
			<div className="content" id="contas">
				<div className="header">
					<div className="search">
						<Search className="icon" />
						<input
							className="search-input"
							type="search"
							placeholder="Digite o nome da conta"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<Link className="new-account" to="/addaccount">
						<CirclePlus className="icon" />
						<p className="text">Adicionar conta</p>
					</Link>
				</div>
				{loading ? (
					<Loader />
				) : error ? (
					<Error errorText={error} />
				) : searchFilteredAccounts.length === 0 ? (
					<Error errorText="Nenhuma conta cadastrada" />
				) : paginatedAccounts.length > 0 ? (
					<ul className="games-group">
						{paginatedAccounts.map((item) => (
							<div key={item.numericId}>
								<Card
									cardNumericId={item.numericId}
									cardImage={item.image}
									cardTitle={item.title}
									cardPlatform={item.platform}
									cardPrice={item.price}
									onDelete={() => handleDeleteClick(item.numericId)}
								/>
							</div>
						))}
					</ul>
				) : (
					<p>Conta não encontrada</p>
				)}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			{isModalOpen && (
				<Modal onClose={() => setModalOpen(false)}>
					<ConfirmModal
						DeleteImage={Trash}
						onDelete={() => handleDelete(selectedCardId)}
						onClose={() => setModalOpen(false)}
					/>
				</Modal>
			)}
		</Container>
	)
}
