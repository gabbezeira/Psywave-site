import { Footer, Menu, PromoBar } from '@components'
import { MainContent, PageWrapper } from '@styles'
import { Errors } from '../components'

export function Error() {
	return (
		<PageWrapper>
			<PromoBar />
			<Menu />
			<MainContent>
				<Errors />
			</MainContent>
			<Footer />
		</PageWrapper>
	)
}
