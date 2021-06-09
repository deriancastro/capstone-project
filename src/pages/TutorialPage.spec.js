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
        onDetail={noop}
        onNavigate={noop}
      />
    )

    const heading = screen.getByRole('heading', { name: 'TUTORIAL' })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('TUTORIAL')

    const cardList = screen.getAllByTestId('card')
    expect(cardList).toHaveLength(8)
  })

  it('calls onDetail correctly', () => {
    const onDetail = jest.fn()
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techNamesList={['Uchimata']}
        onDetail={onDetail}
        onNavigate={noop}
      />
    )

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(onDetail).toHaveBeenCalledTimes(1)
  })

  it('calls onNavigate correctly', () => {
    const onNavigate = jest.fn()
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techNamesList={['Uchimata']}
        onDetail={noop}
        onNavigate={onNavigate}
      />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
