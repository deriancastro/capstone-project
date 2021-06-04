import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders a title', () => {
    render(<Header>TUTORIAL</Header>)
    expect(
      screen.getByRole('heading', { name: 'TUTORIAL' })
    ).toBeInTheDocument()
  })
})
