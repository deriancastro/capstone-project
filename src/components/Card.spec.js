import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders a text with the name of the judo technique ', () => {
    render(<Card techName="Uchimata" />)
    expect(screen.getByText('Uchimata')).toBeInTheDocument()
  })
})
