import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const StyledDropdown = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	min-width: 100vw;
	visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
	.info-enter {
		left: -50px;
		opacity: 0;
	}
	.info-enter-active {
		left: 0;
		opacity: 1;
		transition: all 500ms;
	}
	.info-exit {
		left: 0;
		opacity: 1;
	}
	.info-exit-active {
		left: -50px;
		opacity: 0;
		transition: all 500ms;
	}
`

const Dropdown = ({ links, open }) => {
	return (
		<StyledDropdown className={`bg-brandBlack opacity-${open ? '100' : '0'} `} open={open}>
			<CSSTransition in={open} timeout={500} classNames="info">
				<div className="max-w-7xl px-8  mx-auto py-12 relative">
					{links.map((link, i) => <div key={i}>{link.name}</div>)}
				</div>
			</CSSTransition>
		</StyledDropdown>
	)
}
export default Dropdown
