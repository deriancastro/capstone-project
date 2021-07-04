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
  color: var(--color-primary-text);
  background: var(--color-secondary-background);
  &.active {
    color: var(--color-active-text);
    z-index: -10;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
