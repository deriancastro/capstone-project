import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  component: PropTypes.any,
  disabled: PropTypes.bool,
}

export default function Button({
  component: Component = 'button',
  ...otherProps
}) {
  return <ButtonStyled as={Component} {...otherProps} />
}

const ButtonStyled = styled.button`
  font-weight: 300;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  border: none;
  padding: 12px;
  cursor: pointer;
  color: ${p => p.color};
  background: ${p => (p.isActive ? '#bf665e' : '#777')};
  &.active {
    background: #bf665e;
    z-index: -10;
  }
  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`
