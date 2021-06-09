import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('Card', () => {
  const noop = () => {}

  it('renders a text with the name of the judo technique ', () => {
    render(<Card techName="Uchimata" onDetail={noop} />)
    expect(screen.getByText('Uchimata')).toBeInTheDocument()
  })

  it('calls onDetail correctly', () => {
    const onDetail = jest.fn()
    render(<Card onDetail={onDetail} />)

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(onDetail).toHaveBeenCalledTimes(1)
  })
})
