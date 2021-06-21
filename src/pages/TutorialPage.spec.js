import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import techniqueData from '../data/techniqueData.json'
import TutorialPage from './TutorialPage'

describe('TutorialPage', () => {
  const noop = () => {}
  const techniqueList = techniqueData

  it('renders multiple cards and a heading', () => {
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
    expect(cardList.length).toBeGreaterThan(7)
  })

  it('calls onDetail correctly', () => {
    const onDetail = jest.fn()
    render(
      <TutorialPage
        pageName="TUTORIAL"
        techniqueList={[
          {
            name: 'De ashi barai - Ko soto gari',
            id: '1',
            url: 'https://youtu.be/hNV9Oh2B_Kc',
          },
        ]}
        onDetail={onDetail}
      />
    )

    const card = screen.getByTestId('card')
    userEvent.click(card)
    expect(onDetail).toHaveBeenCalledTimes(1)
  })
})
