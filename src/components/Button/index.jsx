import { StyledButton } from './styles'

export const Button = ({ borderRadius, padding, children, width }) => (
	<StyledButton $borderRadius={borderRadius} $padding={padding} $width={width}>
		{children}
	</StyledButton>
)
