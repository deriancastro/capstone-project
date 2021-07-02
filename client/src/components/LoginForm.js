import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default function LoginForm({ onLogin }) {
  const [isActive, setIsActive] = useState(true)

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="login form"
      role="form"
    >
      <Label>
        email:
        <input
          name="email"
          type="text"
          placeholder="your email"
          pattern="^(.+)@(.+)$"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        password:
        <input
          name="password"
          type="password"
          placeholder="your password"
          minLength="4"
          autoComplete="off"
          required
          data-testid="password"
        />
      </Label>
      <SingInButton disabled={isActive}>login</SingInButton>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value

    const logProfile = {
      email: email,
      password: password,
    }

    onLogin(logProfile)
    form.reset()
    event.target.elements.email.focus()
    setIsActive(true)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputEmail = form.elements.email.value.trim()
    const inputPassword = form.elements.password.value.trim()
    setIsActive(!inputEmail || !inputPassword)
  }
}

const Form = styled.form`
  display: grid;
  height: min-content;
  width: 100vw;
  padding: 10px;
  gap: 10px;
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

const SingInButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--color-active-background);
  color: var(--color-active);
  width: 80%;
  justify-self: center;
  margin-top: 16px;
`
