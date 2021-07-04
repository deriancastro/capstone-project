import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GoalsPage from './GoalsPage'

describe('GoalsPage', () => {
  const noop = () => {}

  it('renders 1 heading and 5 goals', () => {
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[
          {
            text: 'Improve the performance of my left uchimata',
            id: '1',
            isChecked: false,
          },
          { text: 'See the yoko tomoe tutorial', id: '2', isChecked: false },
          {
            text: 'Ask the trainer about the next competition',
            id: '3',
            isChecked: false,
          },
          { text: 'Check my weigth every 2 days', id: '4', isChecked: false },
          {
            text: 'Do the strength plan for the week',
            id: '5',
            isChecked: false,
          },
        ]}
        onCheckGoal={noop}
        onSubmit={noop}
        deleteGoal={noop}
        toProfile={noop}
      />
    )

    const heading = screen.getByRole('heading', { name: 'GOALS' })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('GOALS')

    const goalsList = screen.getAllByRole('checkbox')
    expect(goalsList).toHaveLength(5)
  })

  it('calls onCheckGoal correctly', () => {
    const onCheckGoal = jest.fn()
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[
          {
            text: 'Improve the performance of my left uchimata',
            id: '123',
            isChecked: false,
          },
        ]}
        onCheckGoal={onCheckGoal}
        onSubmit={noop}
        deleteGoal={noop}
        toProfile={noop}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(onCheckGoal).toHaveBeenCalledTimes(1)
  })

  it('calls onSubmit correctly', () => {
    const onSubmit = jest.fn()
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[
          {
            text: 'Improve the performance of my left uchimata',
            id: '123',
            isChecked: false,
          },
        ]}
        onCheckGoal={noop}
        onSubmit={onSubmit}
        deleteGoal={noop}
        toProfile={noop}
      />
    )

    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('calls deleteGoal correctly', () => {
    const deleteGoal = jest.fn()
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[
          {
            text: 'Improve the performance of my left uchimata',
            id: '123',
            isChecked: false,
          },
        ]}
        onCheckGoal={noop}
        onSubmit={noop}
        deleteGoal={deleteGoal}
        toProfile={noop}
      />
    )

    const deleteButton = screen.getByRole('button', { name: 'delete.svg' })
    userEvent.click(deleteButton)
    expect(deleteGoal).toHaveBeenCalledTimes(1)
  })
})
