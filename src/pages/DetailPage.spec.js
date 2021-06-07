import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailPage from './DetailPage'

describe('DetailPage', () => {
  it('renders: 1 header, 1 image and 1 button', () => {
    render(<DetailPage pageName="Uchimata" toTutorialPage={jest.fn()} />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls toTutorialPage correctly', () => {
    const handleToTutorialPage = jest.fn()
    render(
      <DetailPage pageName="Uchimata" toTutorialPage={handleToTutorialPage} />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(handleToTutorialPage).toHaveBeenCalledTimes(1)
  })
})
