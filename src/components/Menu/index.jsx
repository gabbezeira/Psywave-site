import Logo from '@assets/logo.webp'
import { X as CloseIcon, Menu as MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { HamburgerButton, MobileMenu, StyledMenu } from './styles'

const scrollWithOffset = (el, offset) => {
	const elementPosition = el.offsetTop - offset
	window.scroll({
		top: elementPosition,
		left: 0,
		behavior: 'smooth',
	})
}

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<StyledMenu>
			<img src={Logo} className="logo" alt="logo" />
			<div role="button" className="hamburgerButton" onClick={toggleMenu}>
				{isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
			</div>

			<div className="menuItems">
				<Link className="link" to="/">
					Início
				</Link>
				<Link
					className="link"
					to="/#sobre-nos"
					smooth
					scroll={(el) => scrollWithOffset(el, 160)}
				>
					Sobre Nós
				</Link>
				<Link
					className="link"
					to="/#promocoes"
					smooth
					scroll={(el) => scrollWithOffset(el, 160)}
				>
					Promoções
				</Link>
				<Link
					className="link"
					to="/#contato"
					smooth
					scroll={(el) => scrollWithOffset(el, -20)}
				>
					Contato
				</Link>
			</div>

			<Link
				className="button"
				to="/#contato"
				smooth
				scroll={(el) => scrollWithOffset(el, -20)}
			>
				Entrar
			</Link>

			{isOpen && (
				<MobileMenu>
					<Link className="link" to="/" onClick={toggleMenu}>
						Início
					</Link>
					<Link
						className="link"
						to="/#sobre-nos"
						smooth
						scroll={(el) => scrollWithOffset(el, 160)}
						onClick={toggleMenu}
					>
						Sobre Nós
					</Link>
					<Link
						className="link"
						to="/#promocoes"
						smooth
						scroll={(el) => scrollWithOffset(el, 160)}
						onClick={toggleMenu}
					>
						Promoções
					</Link>
					<Link
						className="link"
						to="/#contato"
						smooth
						scroll={(el) => scrollWithOffset(el, -20)}
						onClick={toggleMenu}
					>
						Contato
					</Link>
				</MobileMenu>
			)}
		</StyledMenu>
	)
}
