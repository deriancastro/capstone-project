import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  const noop = () => {}
  const onLogin = jest.fn()

  it('renders 2 inputs fields and 1 button', () => {
    render(<LoginForm onLogin={noop} />)

    const emailInput = screen.getByRole('textbox', { name: 'email:' })
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByTestId('password', { name: 'password:' })
    expect(passwordInput).toBeInTheDocument()

    const loginButton = screen.getByRole('button', { name: 'login' })
    expect(loginButton).toBeInTheDocument()
  })

  it('calls onLogin correctly by click loginButton when email and password fields are not empty', () => {
    render(<LoginForm onLogin={onLogin} />)

    const emailInput = screen.getByRole('textbox', { name: 'email:' })
    userEvent.type(emailInput, 'deriancastro@hotmail.com')

    const passwordInput = screen.getByTestId('password', { name: 'password:' })
    userEvent.type(passwordInput, '1234')

    const loginButton = screen.getByRole('button', { name: 'login' })
    userEvent.click(loginButton)

    expect(onLogin).toHaveBeenCalledWith({
      email: 'deriancastro@hotmail.com',
      password: '1234',
    })
  })

  it('calls onLogin correctly by -enter- when email and password fields are not empty', () => {
    render(<LoginForm onLogin={onLogin} />)

    const emailInput = screen.getByRole('textbox', { name: 'email:' })
    userEvent.type(emailInput, 'deriancastro@hotmail.com')

    const passwordInput = screen.getByTestId('password', { name: 'password:' })
    userEvent.type(passwordInput, '1234')

    const loginForm = screen.getByRole('form', { name: 'login form' })
    fireEvent.submit(loginForm)

    expect(onLogin).toHaveBeenCalledWith({
      email: 'deriancastro@hotmail.com',
      password: '1234',
    })
  })

  it('does not call onLogin when one of the inputs is empty', () => {
    render(<LoginForm onLogin={onLogin} />)

    const loginButton = screen.getByRole('button', { name: 'login' })
    expect(loginButton).toBeDisabled()

    fireEvent.click(loginButton)

    expect(onLogin).toHaveBeenCalledTimes(0)
  })
})
