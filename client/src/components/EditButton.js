import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as Edit } from '../assets/edit.svg'

EditButton.propTypes = {
  onClick: PropTypes.func,
}

export default function EditButton({ onClick }) {
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
const SVG = styled(Edit)`
  stroke: orange;
  width: 1.5rem;
`
