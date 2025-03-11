import background from '@assets/about.svg'
import Gmail from '@assets/social/gmail.svg'
import Instagram from '@assets/social/instagram.svg'
import Youtube from '@assets/social/youtube.svg'
import { StyledAbout } from './styles'

export const About = () => (
	<StyledAbout $image={background} id="sobre-nos">
		<div className="texts">
			<h1 className="title">Sobre nós</h1>
			<p className="description">
				Somos uma emprese séria, totalmente dedicada á fornecer um serviço de
				qualidade para nossos clientes. Oferecemos suporte no processo de login
				na conta, tiramos todas as dúvidas além de sermos totalmente
				transparentes, veja mais um pouco sobre nós em nossas redes sociais!
			</p>
		</div>
		<div className="contact-area">
			<div className="social-media">
				<img className="image" alt="email" src={Gmail} />
				<p className="text">Psywave</p>
			</div>

			<div className="social-media">
				<img
					className="image"
					alt="instagram"
					src={Instagram}
					style={{ height: '2.5rem' }}
				/>
				<p className="text">@Psywave</p>
			</div>

			<div className="social-media">
				<img className="image" alt="youtube" src={Youtube} />
				<p className="text">@Psywave</p>
			</div>
		</div>
	</StyledAbout>
)
