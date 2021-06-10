import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Goal.propTypes = {
  goalText: PropTypes.string,
  goalNumber: PropTypes.number,
  onCheckGoal: PropTypes.func,
  isChecked: PropTypes.bool,
}

export default function Goal({ goalText, goalNumber, onCheckGoal, isChecked }) {
  return (
    <Wrapper data-testid="goal">
      <ItemNumber data-testid="itemNumber">{goalNumber}.</ItemNumber>
      <CheckBox>
        <Text>{goalText}</Text>
        <input onChange={handleCheckGoal} type="checkbox" checked={isChecked} />
      </CheckBox>
    </Wrapper>
  )

  function handleCheckGoal() {
    onCheckGoal(goalNumber - 1)
  }
}

const Wrapper = styled.section`
  /* position: relative; */
  display: flex;
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px #0006;
`
const ItemNumber = styled.span`
  font-weight: 600;
  width: 3.5ch;
`

const CheckBox = styled.label`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: 1fr 15px;

  input {
    justify-self: end;
    /* position: absolute;
    /* -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, 70%); */
  }
`
const Text = styled.p`
  text-align: justify;
`
