import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  const noop = () => {}
  it('renders a title and a LogoButton', () => {
    render(<Header toProfile={noop}>TUTORIAL</Header>)

    const heading = screen.getByRole('heading', { name: 'TUTORIAL' })
    expect(heading).toBeInTheDocument()

    const logoButton = screen.getByRole('button', { name: 'logoButton' })
    expect(logoButton).toBeInTheDocument()
  })
})
