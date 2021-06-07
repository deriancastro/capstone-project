import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <Title>{children}</Title>
}

const Title = styled.h2`
  background: papayawhip;
  padding: 10px;
  box-shadow: 0 3px 3px #0003;
  text-align: center;
`
