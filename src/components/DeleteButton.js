import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as Delete } from '../assets/delete.svg'

DeleteButton.propTypes = {
  index: PropTypes.number,
  deleteGoal: PropTypes.func,
}

export default function DeleteButton({ index, deleteGoal }) {
  return (
    <Button onClick={handleDeleteGoal}>
      <SVG />
    </Button>
  )

  function handleDeleteGoal() {
    deleteGoal(index)
  }
}

const Button = styled.button`
  background: none;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
`
const SVG = styled(Delete)`
  fill: red;
  width: 1.5rem;
`
