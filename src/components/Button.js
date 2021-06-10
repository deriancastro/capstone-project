import PropTypes from 'prop-types'
import * as React from 'react'
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
  font-weight: 600;
  font-size: large;
  border: none;
  padding: 12px;
  cursor: pointer;
  background: ${p => (p.isActive ? 'steelblue' : 'papayawhip')};
  &.active {
    background: steelblue;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
