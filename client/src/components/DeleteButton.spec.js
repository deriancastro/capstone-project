import { getByRole, getByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DeleteButton from './DeleteButton'

describe('DeleteButton', () => {
  const noop = () => {}

  it('renders a button with an svg inside it', () => {
    render(<DeleteButton deleteGoal={noop} />)

    const deleteButton = screen.getByRole('button', { name: 'delete.svg' })
    expect(deleteButton).toBeInTheDocument()
  })

  it('calls deleteGoal correctly', () => {
    const deleteGoal = jest.fn()
    render(<DeleteButton deleteGoal={deleteGoal} />)

    const deleteButton = screen.getByRole('button', { name: 'delete.svg' })
    userEvent.click(deleteButton)
    expect(deleteGoal).toHaveBeenCalledTimes(1)
  })
})
