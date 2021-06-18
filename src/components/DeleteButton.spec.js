import { getByRole, getByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DeleteButton from './DeleteButton'

describe('DeleteButton', () => {
  const noop = () => {}

  it('renders a button with an svg inside it', () => {
    render(<DeleteButton deleteGoal={noop} />)

    const deleteButton = screen.getByRole('button')
    expect(deleteButton).toContainHTML(
      '<svg class="DeleteButton__SVG-sc-19e4le7-1 jFedtd">delete.svg</svg>'
    )
  })

  it('calls deleteGoal correctly', () => {
    const deleteGoal = jest.fn()
    render(<DeleteButton deleteGoal={deleteGoal} />)

    const deleteButton = screen.getByRole('button')
    userEvent.click(deleteButton)
    expect(deleteGoal).toHaveBeenCalledTimes(1)
  })
})
