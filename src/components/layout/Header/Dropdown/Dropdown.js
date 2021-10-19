import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const StyledDropdown = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	min-width: 100vw;
	.info-enter {
		opacity: 0;
	}
	.info-enter-active {
		opacity: 1;
		transition: all 500ms;
	}
	.info-exit {
		opacity: 1;
	}
	.info-exit-active {
		opacity: 0;
		transition: all 500ms;
	}
`

const Dropdown = ({ links, open }) => {
	return (
		<StyledDropdown className="bg-brandBlack" open={open}>
			<div className="max-w-7xl px-8  mx-auto py-12 relative">
				{links.map((link, i) => <div key={i}>{link.name}</div>)}
			</div>
		</StyledDropdown>
	)
}
export default Dropdown
