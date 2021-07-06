import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import logoButton from '../assets/logoButton.png'

LogoButton.propTypes = {
  toProfile: PropTypes.func.isRequired,
}

export default function LogoButton({ toProfile }) {
  return (
    <Button onClick={toProfile}>
      <img src={logoButton} alt="logoButton" />
    </Button>
  )
}

const Button = styled.button`
  background: none;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  position: absolute;
  left: 10px;
  top: 8px;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`
