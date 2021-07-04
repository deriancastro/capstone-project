import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LogoutButton from './LogoutButton'

describe('LogoutButton', () => {
  const noop = () => {}
  it('renders a button with an svg inside it', () => {
    render(<LogoutButton logOut={noop} />)

    const logoutButton = screen.getByRole('button', { name: 'logout.svg' })
    expect(logoutButton).toBeInTheDocument()
  })

  it('calls logOut correctly', () => {
    const logOut = jest.fn()
    render(<LogoutButton logOut={logOut} />)

    const logoutButton = screen.getByRole('button', { name: 'logout.svg' })
    userEvent.click(logoutButton)
    expect(logOut).toHaveBeenCalledTimes(1)
  })
})
