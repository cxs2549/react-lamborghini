import styled from 'styled-components'
import logo from '../../../../assets/logo.png'
const StyledLogo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
`
const Logo = () => {
return (
<StyledLogo className="h-12 w-12 xl:h-14 xl:w-14 ml-0.5">

</StyledLogo>
)
}
export default Logo