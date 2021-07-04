import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LogoButton from './LogoButton'

describe('LogoButton', () => {
  const noop = () => {}
  it('renders a button with an svg inside it', () => {
    render(<LogoButton toProfile={noop} />)

    const logoButton = screen.getByRole('button', { name: 'logo2.svg' })
    expect(logoButton).toBeInTheDocument()
  })

  it('calls toProfile correctly', () => {
    const toProfile = jest.fn()
    render(<LogoButton toProfile={toProfile} />)

    const logoButton = screen.getByRole('button', { name: 'logo2.svg' })
    userEvent.click(logoButton)
    expect(toProfile).toHaveBeenCalledTimes(1)
  })
})
