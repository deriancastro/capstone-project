import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ name, path, disabled }) => (
        <NavButton
          exact
          component={NavLink}
          key={name}
          to={path}
          disabled={disabled}
          color="steelblue"
        >
          {name}
        </NavButton>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
