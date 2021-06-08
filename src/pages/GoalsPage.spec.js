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
          { text: 'Improve the performance of my left uchimata' },
          { text: 'See the yoko tomoe tutorial' },
          { text: 'Ask the trainer about the next competition' },
          { text: 'Check my weigth every 2 days' },
          { text: 'Do the strength plan for the week' },
        ]}
        isChecked={noop}
        onNavigate={noop}
      />
    )

    const heading = screen.getByRole('heading', { name: 'GOALS' })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('GOALS')

    const goalsList = screen.getAllByRole('checkbox')
    expect(goalsList).toHaveLength(5)
  })

  it('calls isChecked correctly', () => {
    const isChecked = jest.fn()
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[{ text: 'Improve the performance of my left uchimata' }]}
        isChecked={isChecked}
        onNavigate={noop}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(isChecked).toHaveBeenCalledTimes(1)
  })

  it('calls onNavigate correctly', () => {
    const onNavigate = jest.fn()
    render(
      <GoalsPage
        pageName="GOALS"
        goalsList={[{ text: 'Improve the performance of my left uchimata' }]}
        isChecked={noop}
        onNavigate={onNavigate}
      />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
