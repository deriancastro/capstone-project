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
        isChecked={true}
        onCheckGoal={noop}
      />
    )

    const itemNumber = screen.getByTestId('itemNumber')
    expect(itemNumber).toHaveTextContent('1')

    const text = screen.getByRole('checkbox', {
      name: 'Improve the performance of my left uchimata',
    })
    expect(text).toBeInTheDocument()
  })

  it('calls onCheckGoal correctly', () => {
    const onCheckGoal = jest.fn()
    render(
      <Goal
        goalText="Improve the performance of my left uchimata"
        goalNumber={1}
        isChecked={true}
        onCheckGoal={onCheckGoal}
      />
    )

    const checkbox = screen.getByTestId('input-checkbox')
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(onCheckGoal).toHaveBeenCalledTimes(1)
  })
})
