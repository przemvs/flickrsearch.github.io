import styled from 'styled-components'

const StyledImage = styled.div`
  background-image: url(${props => props.img && props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  position: relative;
`

export default StyledImage
