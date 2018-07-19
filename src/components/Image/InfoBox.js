import styled from 'styled-components'

const InfoBox = styled.div`
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? 'visibility' : 'hidden')};
  position: ${props => (props.open ? 'relative' : 'absolute')};
  
  background: red;
  width: 100%;
  height: 100%;
`

export default InfoBox
