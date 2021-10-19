import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import styled from 'styled-components'
const StyledBase = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	min-width: 100vw;
	background-color: #131313;
	z-index: -1;
`
const StyledDropdown = styled.div`
	width: 100%;
	.info-appear {
		left: -100px;
	}
	.info-appear-active {
		left: 0;
		transition: left 800ms;
	}
	.info-enter {
		left: -100px;
	}
	.info-enter-active {
		transition: left 800ms;
		left: 0;
	}
	.info-exit {
		left: 0;
	}
	.info-exit-active {
		left: -100px;
		transition: all 400ms;
	}
`

const Dropdown = ({ links, open }) => {
	const [ sub1, setSub1 ] = useState(false)
	const [ sub2, setSub2 ] = useState(false)
	const [ sub3, setSub3 ] = useState(false)
	const [ sub4, setSub4 ] = useState(false)

	const subs = [ sub1, sub2, sub3, sub4 ]

	const handleHoverSub = () => {
		setSub1(!sub1)
	}
	const handleHoverSubLeave = () => {
		setSub1(false)
	}
	const handleHoverSub2 = () => {
		setSub2(!sub2)
	}
	const handleHoverSubLeave2 = () => {
		setSub2(false)
	}
	const handleHoverSub3 = () => {
		setSub3(!sub3)
	}
	const handleHoverSubLeave3 = () => {
		setSub3(false)
	}
	const handleHoverSub4 = () => {
		setSub4(!sub4)
	}
	const handleHoverSubLeave4 = () => {
		setSub4(false)
	}

	const handleSubs = [ handleHoverSub, handleHoverSub2, handleHoverSub3, handleHoverSub4 ]
	const handleSubsLeave = [
		handleHoverSubLeave,
		handleHoverSubLeave2,
		handleHoverSubLeave3,
		handleHoverSubLeave4
	]
	return (
		<StyledBase id="base">
			<StyledDropdown>
				<CSSTransition appear unmountOnExit in={open} timeout={800} classNames="info">
					<div className="max-w-7xl py-12 px-20 text-sm mx-auto relative ">
						<div className="flex flex-col gap-8">
							{links.map((link, i) => (
								<div
									onMouseEnter={handleSubs[i]}
									onMouseLeave={handleSubsLeave[i]}
									key={i}
									className="opacity-75 cursor-pointer hover:opacity-100  flex gap-24"
								>
									<span>{link.name}</span>
									<CSSTransition
										unmountOnExit
										in={subs[i]}
										timeout={400}
										classNames="dropdown"
									>
										<div className="gap-8 flex flex-col">
											{link.links &&
												link.links.map((link, i) => (
													<div key={i}>{link}</div>
												))}
										</div>
									</CSSTransition>
								</div>
							))}
						</div>
					</div>
				</CSSTransition>
			</StyledDropdown>
		</StyledBase>
	)
}
export default Dropdown
