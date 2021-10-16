import styled from 'styled-components'
const StyledLeftLinks = styled.div``
const LeftLinks = () => {
	const links = [ 'models', 'custom solutions', 'ownership', 'motorsport' ]
	return (
		<StyledLeftLinks className="hidden xl:flex gap-6 uppercase">
			{links.map((link, i) => <a href="/" className="opacity-75">{link}</a>)}
		</StyledLeftLinks>
	)
}
export default LeftLinks
