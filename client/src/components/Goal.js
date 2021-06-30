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
      <Label>
        <Text>{goalText}</Text>
        <input
          onChange={handleCheckGoal}
          type="checkbox"
          checked={isChecked}
          data-testid="input-checkbox"
        />
      </Label>
    </Wrapper>
  )

  function handleCheckGoal() {
    onCheckGoal(goalNumber - 1)
  }
}

const Wrapper = styled.section`
  display: flex;
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 4px #0006;
  background: var(--color-secondary);
  width: 321px;
  overflow: auto;

  @media (min-width: 600px) {
    width: 613px;
  }
`
const ItemNumber = styled.span`
  font-weight: 600;
  width: 3.5ch;
`

const Label = styled.label`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: 1fr 15px;

  input {
    justify-self: end;
  }
`
const Text = styled.p`
  text-align: justify;
`
