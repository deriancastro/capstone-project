import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as Logo } from '../assets/logo2.svg'

LogoButton.propTypes = {
  toProfile: PropTypes.func.isRequired,
}

export default function LogoButton({ toProfile }) {
  return (
    <Button onClick={toProfile}>
      <SVG />
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
  top: 2px;

  @media (min-width: 600px) {
    right: 620px;
    top: 10px;
  }
`
const SVG = styled(Logo)`
  width: 2.5rem;
`
