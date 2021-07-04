import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'
import userEvent from '@testing-library/user-event'

describe('HomePage', () => {
  it('renders a log in Form or a Profile Form', () => {
    const noop = () => {}

    render(<HomePage onSubmit={noop} onLogin={noop} />)

    const loginForm = screen.getByRole('form', { name: 'login form' })
    expect(loginForm).toBeInTheDocument()

    const linkButton = screen.getByRole('button', { name: 'or register' })
    userEvent.click(linkButton)

    const profileForm = screen.getByRole('form', { name: 'registration form' })
    expect(profileForm).toBeInTheDocument()
  })
})
