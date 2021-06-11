import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GoalsPage from './GoalsPage'

describe('GoalsPage', () => {
  const noop = () => {}

  it('renders 1 heading and 5 goals', () => {
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[
          { text: 'Improve the performance of my left uchimata', id: '1' },
          { text: 'See the yoko tomoe tutorial', id: '2' },
          { text: 'Ask the trainer about the next competition', id: '3' },
          { text: 'Check my weigth every 2 days', id: '4' },
          { text: 'Do the strength plan for the week', id: '5' },
        ]}
        onCheckGoal={noop}
        onNavigate={noop}
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
        goalsList={[{ text: 'Improve the performance of my left uchimata' }]}
        onCheckGoal={onCheckGoal}
        onNavigate={noop}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(onCheckGoal).toHaveBeenCalledTimes(1)
  })
})
