import styled from 'styled-components'
const StyledRightLinks = styled.nav``
const RightLinks = () => {
    const links = ['dealerships', 'museum', 'store']
return (
<StyledRightLinks className="hidden xl:flex gap-6 uppercase">
    {links.map((link, i) => (
        <a href="/" className="opacity-75">{link}</a>
    ))}
</StyledRightLinks>
)
}
export default RightLinks