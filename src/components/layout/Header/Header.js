import styled from 'styled-components'
import Icons from './Icons/Icons'
import LeftLinks from './LeftLinks/LeftLinks'
import Logo from './Logo/Logo'
import RightLinks from './RightLinks/RightLinks'
const StyledHeader = styled.header`
	background-color: #131313;
	position: relative;
	z-index: 1;
	#left {
		grid-template-columns: 56px 1fr;
	}
`
const Header = () => {
	return (
		<StyledHeader className="h-16 xl:h-20">
			<div className="container">
				<div id="left" className="grid items-center w-7/12 h-full">
					<Logo />
					<LeftLinks />
				</div>
				<div className="flex items-center justify-end gap-12 w-5/12 h-full">
					<RightLinks />
					<Icons />
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
