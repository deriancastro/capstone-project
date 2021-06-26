import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'
import userEvent from '@testing-library/user-event'

describe('HomePage', () => {
  //Note: For the moment, this page gives its props to the Profile Form.
  it('renders a Profile Form', () => {
    const noop = () => {}

    render(<HomePage onSubmit={noop} onLogin={noop} />)

    const loginForm = screen.getByRole('form', { name: 'log in form' })
    expect(loginForm).toBeInTheDocument()

    const modusForm = screen.getByTestId('modusForm', { name: 'or sing up' })
    userEvent.click(modusForm)

    const profileForm = screen.getByRole('form', { name: 'registration form' })
    expect(profileForm).toBeInTheDocument()
  })
})
