import styled from 'styled-components'
import Dropdown from '../Dropdown/Dropdown'
import { CSSTransition } from 'react-transition-group'
import { useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'

const StyledLeftLinks = styled.ul`
	a {
		position: relative;
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
		&:hover::before, &:active:before {
			opacity: 1;
			width: 100%;
		}
	}

	.dropdown-enter {
		opacity: 0;
	}
	.dropdown-enter-active {
		opacity: 1;
		transition: opacity 1s;
	}
	.dropdown-exit {
		opacity: 1;
	}
	.dropdown-exit-active {
		opacity: 0;
		transition: opacity 1s;
	}
`
const LeftLinks = () => {
	const links = [
		{ name: 'models', links: [ { name: 'aventador', links: [ 'item1', 'item2', 'item3' ] } ] },
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
		event.preventDefault();
	  };
	  

	return (
		<StyledLeftLinks className="hidden xl:flex gap-6 uppercase">
			{links.map((link, i) => (
				<li
					key={i}
					id={`link-${i}`}
					ref={refs[i]}
					className="relative"
					onClick={allDropToggles[i]}
					// onMouseOver={allDropToggles[i]}
				>
					<a href="/" onClick={handleSubmit} className="opacity-80 nav-link">{link.name}</a>

					<Dropdown links={link.links} open={allMenus[i]} />
				</li>
			))}
		</StyledLeftLinks>
	)
}
export default LeftLinks
