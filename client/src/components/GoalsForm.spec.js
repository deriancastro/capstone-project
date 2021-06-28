import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GoalsForm from './GoalsForm'

describe('GoalsForm', () => {
  const noop = () => {}

  it('renders a input field and a button', () => {
    render(<GoalsForm onSubmit={noop} />)

    const goalInput = screen.getByRole('textbox', { name: 'add goal:' })
    expect(goalInput).toBeInTheDocument()

    const createButton = screen.getByRole('button', { name: 'create' })
    expect(createButton).toBeInTheDocument()
  })

  it('calls handleSubmit by click on createButton, when inputGoal is not empty', () => {
    const handleSubmit = jest.fn()

    render(<GoalsForm onSubmit={handleSubmit} />)

    const inputGoal = screen.getByRole('textbox', { name: 'add goal:' })
    userEvent.type(inputGoal, 'I will be the best in 81kg')

    const createButton = screen.getByRole('button', { name: 'create' })
    userEvent.click(createButton)

    expect(handleSubmit).toHaveBeenLastCalledWith({
      text: 'I will be the best in 81kg',
      isChecked: false,
    })
  })

  it('calls handleSubmit by -Enter-, when inputGoal is not empty', () => {
    const handleSubmit = jest.fn()

    render(<GoalsForm onSubmit={handleSubmit} />)

    const inputGoal = screen.getByRole('textbox', { name: 'add goal:' })
    userEvent.type(inputGoal, 'I will be the best in 81kg')

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(handleSubmit).toHaveBeenLastCalledWith({
      text: 'I will be the best in 81kg',
      isChecked: false,
    })
  })

  it('does not call handleSubmit when inputGoal is empty', () => {
    const handleSubmit = jest.fn()

    render(<GoalsForm onSubmit={handleSubmit} />)

    const form = screen.getByRole('form')

    const createButton = screen.getByRole('button', { name: 'create' })
    expect(createButton).toBeDisabled()

    fireEvent.click(createButton)

    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
})
