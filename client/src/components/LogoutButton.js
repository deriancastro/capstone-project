import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as LogOut } from '../assets/logout.svg'

LogoutButton.propTypes = {
  logOut: PropTypes.func.isRequired,
}

export default function LogoutButton({ logOut }) {
  return (
    <Button onClick={logOut}>
      <SVG />
    </Button>
  )
}

const Button = styled.button`
  background: none;
  width: 2rem;
  height: 2rem;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;

  @media (min-width: 600px) {
    right: 620px;
    top: 10px;
  }
`
const SVG = styled(LogOut)`
  fill: var(--color-danger);
  width: 2rem;
`
