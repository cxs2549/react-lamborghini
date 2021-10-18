import styled from 'styled-components'
import { HiOutlineChatAlt2, HiOutlineSearch } from 'react-icons/hi'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu/Menu'
import useOnClickOutside from 'use-onclickoutside'

const StyledIcons = styled.div`
	position: relative;
	z-index: 10;
	svg {
		opacity: .75;
	}

	#burger:hover,
	#burger:focus {
		.hamburger-react > * {
			background: #fdd874 !important;
		}
	}

	.toggleClass {
		background: #fdd874 !important;
	}
`
const Icons = () => {
	const [ isOpen, setOpen ] = useState(false)
	const handleBurger = () => {
		setOpen(!isOpen)
		var nodes = document.querySelector('.hamburger-react').getElementsByTagName('div')

		for (var i = 0; i < nodes.length; i++) {
			nodes[i].classList.toggle('toggleClass')
		}
	}
	const handleClose = () => {
		setOpen(false)
		var nodes = document.querySelector('.hamburger-react').getElementsByTagName('div')
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].classList.remove('toggleClass')
		}
	}
	const [ isOpenChat, setOpenChat ] = useState(false)
	const handleChat = () => {
		setOpenChat(!isOpenChat)
		chatRef.current.classList.toggle('text-brandYellow')
	}
	const handleCloseChat = () => {
		setOpenChat(false)
		chatRef.current.classList.remove('text-brandYellow')
	}
	const [ isOpenSearch, setOpenSearch ] = useState(false)
	const handleSearch = () => {
		setOpenSearch(!isOpenSearch)
		searchRef.current.classList.toggle('text-brandYellow')
	}
	const handleCloseSearch = () => {
		setOpenSearch(false)
		searchRef.current.classList.remove('text-brandYellow')
	}
	const chatRef = useRef()
	const searchRef = useRef()
	const menuRef = useRef()
	useOnClickOutside(chatRef, handleCloseChat)
	useOnClickOutside(searchRef, handleCloseSearch)
	useOnClickOutside(menuRef, handleClose)
	return (
		<StyledIcons className="grid grid-cols-3 gap-2 items-center">
			{/* chat */}
			<div ref={chatRef}>
				<div className="flex justify-center hover:text-yellow-400 transition-colors duration-200">
					<HiOutlineChatAlt2 size={30} onClick={handleChat} />
				</div>
				<Menu open={isOpenChat}>
					<div className="text-white">chat!</div>
				</Menu>
			</div>
			{/* search */}
			<div ref={searchRef}>
				<div className="flex justify-center hover:text-yellow-400 transition-colors duration-200">
					<HiOutlineSearch size={30} onClick={handleSearch} />
				</div>
				<Menu open={isOpenSearch}>
					<div className="text-white">search!</div>
				</Menu>
			</div>
			{/* burger */}
			<div ref={menuRef}>
				<div id="burger" className="flex justify-center opacity-75 ">
					<Hamburger
						color="#fff"
						rounded
						hideOutline
						toggled={isOpen}
						toggle={handleBurger}
					/>
				</div>
				<Menu open={isOpen}>
					<div className="text-white">burger!</div>
				</Menu>
			</div>
		</StyledIcons>
	)
}
export default Icons
