import { getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('Card', () => {
  it('renders a text with the name of the judo technique ', () => {
    render(
      <Card techName="Uchimata" onClick={jest.fn()} toDetail={jest.fn()} />
    )
    expect(screen.getByText('Uchimata')).toBeInTheDocument()
  })

  it('calls onClick correctly', () => {
    const handleToDetail = jest.fn()
    render(<Card toDetail={handleToDetail} />)

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(handleToDetail).toHaveBeenCalledTimes(1)
  })
})
