import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <Title>{children}</Title>
}

const Title = styled.h2`
  background: #bf665e;
  color: white;
  padding: 10px;
  text-align: center;
`
