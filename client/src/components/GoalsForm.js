import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

GoalsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function GoalsForm({ onSubmit }) {
  const [isActive, setIsActive] = useState(true)
  return (
    <Form
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="create a goal"
      role="form"
    >
      <Label>
        add goal:
        <input
          name="text"
          type="text"
          placeholder="write a goal"
          autoComplete="off"
        />
      </Label>
      <GoalButton disabled={isActive}>create</GoalButton>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const text = form.elements.text.value

    const newGoal = { text: text, isChecked: false }

    onSubmit(newGoal)
    form.reset()
    event.target.elements.text.focus()
    setIsActive(true)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputText = form.elements.text.value.trim()
    setIsActive(inputText ? false : true)
  }
}

const Form = styled.form`
  padding: 10px;
  display: grid;
  height: min-content;
  gap: 10px;
  box-shadow: 0 3px 3px #0003;
`

const Label = styled.label`
  color: var(--color-primary);
  font-weight: bold;
  padding: 0 5px;

  input {
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    background: var(--color-secondary);
  }
`

const GoalButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--color-active-background);
  color: var(--color-active);
  width: 80%;
  justify-self: center;
`
