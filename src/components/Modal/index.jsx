import React, { useState, useEffect, useRef } from 'react'
import { ModalStyled } from './styles'

export const Modal = ({ onClose, children }) => {
	const [isVisible, setIsVisible] = useState(true)
	const modalRef = useRef()

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [onClose])

	const handleCloseButtonClick = () => {
		setIsVisible(false)
		setTimeout(onClose, 300)
	}

	return (
		<ModalStyled className={isVisible ? 'show' : ''}>
			<div className="modalContent" ref={modalRef}>
				{children}
				<button
					type="button"
					className="closeButton"
					onClick={handleCloseButtonClick}
				>
					Fechar
				</button>
			</div>
		</ModalStyled>
	)
}
