import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as LogOut } from '../assets/logout.svg'

LogOutButton.propTypes = {
  logOut: PropTypes.func.isRequired,
}

export default function LogOutButton({ logOut }) {
  return (
    <Button onClick={logOut}>
      <SVG />
    </Button>
  )
}

const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  position: absolute;
  right: 10px;
  top: 70px;
  z-index: 2;
`
const SVG = styled(LogOut)`
  fill: red;
  width: 1.5rem;
`
