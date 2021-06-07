import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TutorialPage from './TutorialPage'

describe('TutorialPage', () => {
  const noop = () => {}

  it('renders 1 heading and 8 cards', () => {
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techNamesList={[
          'Uchimata',
          'Harai goshi',
          'Seoi nage',
          'Ko uchi gari',
          'O soto gari',
          'Kubi nage',
          'Yoko tomoe',
          'Kata guruma',
        ]}
        onNavigate={noop}
      />
    )

    const heading = screen.getByRole('heading', { name: 'TUTORIAL' })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('TUTORIAL')

    const cardList = screen.getAllByTestId('card')
    expect(cardList).toHaveLength(8)
  })

  it('calls onNavigate correctly', () => {
    const showDetailPage = jest.fn()
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techNamesList={['Uchimata']}
        onNavigate={showDetailPage}
      />
    )

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(showDetailPage).toHaveBeenCalledTimes(1)
  })
})
