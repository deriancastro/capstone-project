import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('Card', () => {
  const noop = () => {}

  it('renders a text with the name of the judo technique ', () => {
    render(<Card techName="Uchimata" onClick={noop} toDetail={noop} />)
    expect(screen.getByText('Uchimata')).toBeInTheDocument()
  })

  it('calls onNavigate correctly', () => {
    const onNavigate = jest.fn()
    render(<Card onNavigate={onNavigate} />)

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
