import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as Add } from '../assets/add.svg'

AddButton.propTypes = {
  onClick: PropTypes.func,
}

export default function AddButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <SVG />
    </Button>
  )
}

const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
`
const SVG = styled(Add)`
  fill: green;
  width: 1.5rem;
`
