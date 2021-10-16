import styled from 'styled-components'
import Icons from './Icons/Icons'
import LeftLinks from './LeftLinks/LeftLinks'
import Logo from './Logo/Logo'
import RightLinks from './RightLinks/RightLinks'
const StyledHeader = styled.header`
	background-color: #131313;
	position: relative;
	z-index: 10;
`
const Header = () => {
	return (
		<StyledHeader className="h-16 xl:h-20">
			<div className="container">
				<div className="flex items-center gap-12">
					<Logo />
					<LeftLinks />
				</div>
				<div className="flex items-center gap-12">
					<RightLinks />
					<Icons />
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
