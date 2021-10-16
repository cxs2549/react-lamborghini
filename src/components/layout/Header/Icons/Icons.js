import styled from 'styled-components'
import { HiOutlineChatAlt2, HiOutlineSearch } from 'react-icons/hi'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'

const StyledIcons = styled.div`
	position: relative;
	z-index: 10;
	svg,
	#burger {
		opacity: .75;
	}
`
const Icons = () => {
	const [ isOpen, setOpen ] = useState(false)
    const menuRef = useRef()
    useOnClickOutside(menuRef, () => setOpen(false))
	return (
		<StyledIcons className="grid grid-cols-3 gap-2 items-center">
			<div className="flex justify-center">
				<HiOutlineChatAlt2 size={30} />
			</div>
			<div className="flex justify-center">
				<HiOutlineSearch size={30} />
			</div>
			<div ref={menuRef}>
				<div className="flex justify-center opacity-75">
					<Hamburger
						id="burger"
						color="#fff"
						rounded
						hideOutline
						toggled={isOpen}
						toggle={setOpen}
					/>
				</div>
				<Menu open={isOpen} />
			</div>
		</StyledIcons>
	)
}
export default Icons
