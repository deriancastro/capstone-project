import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('Card', () => {
  const techName = 'uchimata'
  const url = 'https://youtu.be/hNV9Oh2B_Kc'
  const noop = () => {}

  it('renders a text with the name of the judo technique ', () => {
    render(<Card techName={techName} url={url} onDetail={noop} />)

    const card = screen.getByTestId('card')
    expect(card).toHaveTextContent('uchimata')
  })

  it('calls onDetail correctly', () => {
    const onDetail = jest.fn()
    render(<Card onDetail={onDetail} />)

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(onDetail).toHaveBeenCalledTimes(1)
  })
})
