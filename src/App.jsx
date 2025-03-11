import { Footer, Menu, PromoBar } from '@components'
import { MainContent, PageWrapper } from '@styles'
import { Outlet } from 'react-router-dom'

export function App() {
	return (
		<PageWrapper>
			<PromoBar />
			<Menu />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer />
		</PageWrapper>
	)
}
