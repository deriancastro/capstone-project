import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  text-decoration: underline;
  font-weight: 600;
  font-size: large;
  border: none;
  background: ${p => (p.isActive ? 'steelblue' : 'papayawhip')};
`
