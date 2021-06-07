import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Goal from './Goal'

describe('Goal', () => {
  const noop = () => {}

  it('renders a Item(number), a text and checkbox', () => {
    render(
      <Goal
        goalText="Improve the performance of my left uchimata"
        goalNumber={1}
        isChecked={noop}
      />
    )

    const itemNumber = screen.getByTestId('itemNumber')
    expect(itemNumber).toHaveTextContent('1')

    const text = screen.getByRole('checkbox', {
      name: 'Improve the performance of my left uchimata',
    })
    expect(text).toBeInTheDocument()
  })

  it('calls isChecked correctly', () => {
    const isChecked = jest.fn()
    render(
      <Goal
        goalText="Improve the performance of my left uchimata"
        goalNumber={1}
        isChecked={isChecked}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(isChecked).toHaveBeenCalledTimes(1)
  })
})
