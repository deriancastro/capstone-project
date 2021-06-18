import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LogoutButton from './LogoutButton'

describe('LogoutButton', () => {
  const noop = () => {}
  it('renders a button with an svg inside it', () => {
    render(<LogoutButton logOut={noop} />)

    const logoutButton = screen.getByRole('button')
    expect(logoutButton).toContainHTML(
      '<svg class="LogoutButton__SVG-wzbbka-1 jnBPOC">logout.svg</svg>'
    )
  })

  it('calls logOut correctly', () => {
    const logOut = jest.fn()
    render(<LogoutButton logOut={logOut} />)

    const logoutButton = screen.getByRole('button')
    userEvent.click(logoutButton)
    expect(logOut).toHaveBeenCalledTimes(1)
  })
})
