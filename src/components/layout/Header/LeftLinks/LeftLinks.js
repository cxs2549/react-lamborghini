import styled from 'styled-components'
import Dropdown from '../Dropdown/Dropdown'
import { useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import { CSSTransition } from 'react-transition-group'

const StyledLeftLinks = styled.ul`
	position: relative;
	li {
		&:hover {
			a {
				opacity: 1;
			}
			a:before {
				opacity: 1;
				width: 100%;
			}
		}
		a {
			position: relative;
			opacity: .75;

			&::before {
				content: '';
				position: absolute;
				height: 1px;
				width: 10%;
				border-radius: 9px;
				background-color: #fff;
				bottom: -4px;
				opacity: 0;
				transition: all 400ms;
			}
			&:hover::before,
			&:active:before {
				opacity: 1;
				width: 100%;
			}
		}
	}

	.dropdown-enter {
		color: transparent;
		max-height: 0;
	}
	.dropdown-enter-active {
		color: white;
		transition: all 800ms;
		max-height: 50rem;
		transition-delay: color 2s;
	}

	.dropdown-exit {
		color: white;
		max-height: 50rem;
	}
	.dropdown-exit-active {
		color: transparent;
		transition: all 500ms;
		max-height: 0;
		transition-delay: color 2s;
	}
`
const LeftLinks = () => {
	const links = [
		{
			name: 'models',
			links: [
				{ name: 'aventador', links: [ 'item1', 'item2', 'item3' ] },
				{ name: 'huracan', links: [ 'item1', 'item2', 'item3' ] },
				{ name: 'aventador', links: [ 'item1', 'item2', 'item3' ] },
				{ name: 'veneno', links: [ 'item1', 'item2', 'item3' ] }
			]
		},
		{
			name: 'custom solutions',
			links: [
				{ name: 'custom solutions' },
				{ name: 'customization' },
				{ name: 'accessories' },
				{ name: 'financial services' }
			]
		},
		{
			name: 'ownership',
			links: [
				{ name: 'ownership' },
				{ name: 'connectivity' },
				{ name: 'customer app' },
				{ name: 'spare parts' },
				{ name: 'assistance and maintenance', links: [ 'item1', 'item2', 'item3' ] }
			]
		},
		{
			name: 'motorsport',
			links: [
				{ name: 'motorsport' },
				{ name: 'super trofeo', links: [ 'item1', 'item2', 'item3' ] },
				{ name: 'gt3' },
				{ name: 'motorsport models', links: [ 'item1', 'item2', 'item3' ] },
				{ name: 'drivers' },
				{ name: 'news' },
				{ name: 'experience', links: [ 'item1', 'item2', 'item3' ] },
				{ name: 'esports' }
			]
		}
		// { name: 'dealerships' },
		// { name: 'museum' },
		// { name: 'store' },
		// { name: 'design' },
		// { name: 'innovation & excellence' },
		// { name: 'driving programs' },
		// { name: 'lounge' },
		// { name: 'club' },
		// { name: 'history' },
		// { name: 'news' }
	]
	const [ isShowing, setIsShowing ] = useState(false)
	const [ isShowingModal1, toggleModal1 ] = useState(false)
	const [ isShowingModal2, toggleModal2 ] = useState(false)
	const [ isShowingModal3, toggleModal3 ] = useState(false)
	const [ isShowingModal4, toggleModal4 ] = useState(false)

	const allDropToggles = [
		() => {
			toggleModal1(!isShowingModal1)
		},
		() => {
			toggleModal2(!isShowingModal2)
		},
		() => {
			toggleModal3(!isShowingModal3)
		},
		() => {
			toggleModal4(!isShowingModal4)
		}
	]
	const allDropTogglesFalse = [
		() => {
			toggleModal1(false)
		},
		() => {
			toggleModal2(false)
		},
		() => {
			toggleModal3(false)
		},
		() => {
			toggleModal4(false)
		}
	]

	const allMenus = [ isShowingModal1, isShowingModal2, isShowingModal3, isShowingModal4 ]

	const ref1 = useRef()
	const ref2 = useRef()
	const ref3 = useRef()
	const ref4 = useRef()

	const refs = [ ref1, ref2, ref3, ref4 ]

	useOnClickOutside(ref1, () => toggleModal1(false))
	useOnClickOutside(ref2, () => toggleModal2(false))
	useOnClickOutside(ref3, () => toggleModal3(false))
	useOnClickOutside(ref4, () => toggleModal4(false))

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<div className="h-full">
			<StyledLeftLinks className="hidden xl:flex items-center justify-center uppercase h-full ">
				{links.map((link, i) => (
					<li
						key={i}
						ref={refs[i]}
						className="relative h-full flex items-center px-5"
						onMouseEnter={allDropToggles[i]}
						onMouseLeave={allDropTogglesFalse[i]}
					>
						<a href="/" onClick={handleSubmit} className=" nav-link">
							{link.name}
						</a>

						<CSSTransition
							in={isShowingModal1 && i === 0}
							timeout={800}
							classNames="dropdown"
							unmountOnExit
						>
							<Dropdown
								links={link.links}
								color="yellow"
								open={isShowingModal1 && i === 0}
							/>
						</CSSTransition>
						<CSSTransition
							in={isShowingModal2 && i === 1}
							timeout={800}
							classNames="dropdown"
							unmountOnExit
						>
							<Dropdown
								links={link.links}
								color="green"
								open={isShowingModal2 && i === 1}
							/>
						</CSSTransition>
						<CSSTransition
							in={isShowingModal3 && i === 2}
							timeout={800}
							classNames="dropdown"
							unmountOnExit
						>
							<Dropdown
								links={link.links}
								color="blue"
								open={isShowingModal3 && i === 2}
							/>
						</CSSTransition>
						<CSSTransition
							in={isShowingModal4 && i === 3}
							timeout={800}
							classNames="dropdown"
							unmountOnExit
						>
							<Dropdown links={link.links} open={isShowingModal4 && i === 3} />
						</CSSTransition>
					</li>
				))}
			</StyledLeftLinks>
		</div>
	)
}
export default LeftLinks
