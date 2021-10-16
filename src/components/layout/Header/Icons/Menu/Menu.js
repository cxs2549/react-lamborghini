import styled from 'styled-components'
const StyledMenu = styled.div`
    position: fixed;
    top: 64px;
    right: ${props => (props.open ? '0' : '-100%')};
    /* opacity: ${props => (props.open ? '1' : '0')}; */
    width: 100%;
    height: calc(100vh - 64px);
    background-color: #131313;
    transition: right 400ms;
    z-index: 100;
    @media (min-width: 1280px) {
    top: 80px;

    }
`
const Menu = ({open}) => {
return (
<StyledMenu open={open}>

</StyledMenu>
)
}
export default Menu