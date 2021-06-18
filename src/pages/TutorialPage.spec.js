import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import techniqueData from '../data/techniqueData.json'
import TutorialPage from './TutorialPage'

describe('TutorialPage', () => {
  const noop = () => {}
  const techniqueList = techniqueData

  it('renders 1 heading and 8 cards', () => {
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techniqueList={techniqueList}
        onDetail={noop}
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
        techniqueList={['Uchimata']}
        onDetail={onDetail}
      />
    )

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(onDetail).toHaveBeenCalledTimes(1)
  })
})
