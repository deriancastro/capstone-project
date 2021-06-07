import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TutorialPage from './TutorialPage'

describe('TutorialPage', () => {
  it('renders 1 header and 8 cards', () => {
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
        toDetailPage={jest.fn()}
      />
    )

    const heading = screen.getByRole('heading', { name: 'TUTORIAL' })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('TUTORIAL')

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()

    const itemList = screen.getAllByRole('listitem')
    expect(itemList).toHaveLength(8)
    expect(itemList[0]).toHaveTextContent('Uchimata')
    expect(itemList[1]).toHaveTextContent('Harai goshi')
    expect(itemList[2]).toHaveTextContent('Seoi nage')
    expect(itemList[3]).toHaveTextContent('Ko uchi gari')
    expect(itemList[4]).toHaveTextContent('O soto gari')
    expect(itemList[5]).toHaveTextContent('Kubi nage')
    expect(itemList[6]).toHaveTextContent('Yoko tomoe')
    expect(itemList[7]).toHaveTextContent('Kata guruma')
  })

  it('calls toDetailPage correctly', () => {
    const handleToDetail = jest.fn()
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techNamesList={['Uchimata']}
        toDetailPage={handleToDetail}
      />
    )

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(handleToDetail).toHaveBeenCalledTimes(1)
  })
})
