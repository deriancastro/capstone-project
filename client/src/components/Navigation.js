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
      {pages.map(({ title, path, disabled }) => (
        <NavButton
          exact
          component={NavLink}
          key={title}
          to={path}
          disabled={disabled}
        >
          {title}
        </NavButton>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: 0 -3px 3px #0003;
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
  color: white;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 5px 5px 10px rgba(13, 13, 13, 0.2);
`
