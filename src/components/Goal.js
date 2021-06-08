import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Goal.propTypes = {
  goalText: PropTypes.string,
  goalNumber: PropTypes.number,
  isChecked: PropTypes.func,
}

export default function Goal({ goalText, goalNumber, isChecked }) {
  return (
    <Wrapper data-testid="goal">
      <ItemNumber data-testid="itemNumber">{goalNumber}.</ItemNumber>
      <CheckBox>
        <Text>{goalText}</Text>
        <input onChange={isChecked} type="checkbox" aria-checked="true" />
      </CheckBox>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  gap: 10px;
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px #0006;
`
const ItemNumber = styled.span`
  font-weight: 600;
`

const CheckBox = styled.label`
  display: flex;
  gap: 10px;
`
const Text = styled.p`
  text-align: justify;
`
